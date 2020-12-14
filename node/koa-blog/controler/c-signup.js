const userModel = require('../lib/mysql')
const fs = require('fs')
const md5 = require('md5')
exports.postSignup = async ctx=>{
  console.log(ctx.request.body);
  // 已经拿到了浏览器传过来的参数
  // 调用数据库插入方法
  let {name,password,repeatpass,avator} = ctx.request.body
  let base64Data = avator.replace(/^data:image\/\w+;base64,/, ""),
      dataBuffer = new Buffer(base64Data, 'base64'),
      getName = Number(Math.random().toString().substr(3)).toString(36) + Date.now(),
      upload = await new Promise((reslove, reject) => {
          fs.writeFile('./public/images/' + getName + '.png', dataBuffer, err => {
              if (err) {
                  throw err;
                  reject(false)
              };
              reslove(true)
              console.log('头像上传成功')
          });
      });
  if(upload){
    await userModel.insertData([name,md5(password),getName + '.png',new Date().getTime()]).then(res=>{
      console.log('注册成功');
      ctx.body={
        code:200,
        message: '注册成功'
      }
    })
  }
}