const http = require("http");
const path = require("path");
const multiparty = require("multiparty");
const fse = require('fs-extra');
const { resolve } = require("path");
const { write, WriteStream } = require("fs");
const server = http.createServer();

// 大文件存储目录
const UPLOAD_DIR = path.resolve(__dirname, "./", "target");

const resolvePost = req =>{
  return new Promise(resolve => {
    let chunk = ''
    req.on('data',data =>{
      chunk += data
    })
    req.on('end', ()=>{
      resolve(JSON.parse(chunk))
    })
  })
}
//创建流方法
const pipeStream = (path, writeStream)=>{
  return new Promise(resolve =>{
    const readStream = fse.createReadStream(path)
    readStream.on('end',()=>{
      fse.unlinkSync(path)
      resolve()
    })
    readStream.pipe(writeStream)
  })
}
// 合成切片
const mergeFileChunk = async (filePath, filename, size) =>{
  const chunkDir = path.resolve(UPLOAD_DIR,filename)
  const chunkPaths = await fse.readdir(chunkDir)
  //根据切片下标进行排序
  chunkPaths.sort((a,b) => a.slice('-')[1] - b.slice('-')[1])
  await Promise.all(
    chunkPaths.map((chunkPath, index) =>{
      pipeStream(
        path.resolve(chunkDir, chunkPath),
        //指定位置创建可写流
        fse.createWriteStream(filePath,{
          start:index * size,
          end:(index + 1) * size
        })
      )
    })
  )
  fse.rmdirSync(chunkDir)
}

server.on("request", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONs") {
    res.status = 200;
    res.end();
    return;
  }

  // 接收切片
  const multipart = new multiparty.Form();
  multipart.parse(req, async (err, fields, files) => {
    if (err) return;
    const [chunk] = files.chunk;
    const [hash] = fields.hash
    const [filename] = fields.filename
    const chunkDir = path.resolve(UPLOAD_DIR,filename)
    //切片目录不存在的话，就创建
    if(fse.existsSync(chunkDir)){
      await fse.mkdirs(chunkDir)
    }

    await fse.move(chunk.path, `${chunkDir}/${hash}`)
    res.end('received file chunk')

  });

  //合成
  if(req.url === '/merge'){
    const data = await resolvePost(req)
    const {filename, size} = data
    const filePath =path.resolve(UPLOAD_DIR,`${filename}`)
    await mergeFileChunk(filePath, filename)
    res.end(JSON.stringify({
      code: 0,
      message:'file merged success'
    }))
  }
});


server.listen(3000, () => {
  console.log("3000端口已经启动");
});
