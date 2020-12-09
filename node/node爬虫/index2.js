//加载https模块，只要又获取网站链接的操作，都需要
const https = require('https')
//加载cheerio
const cheerio = require('cheerio')
const fs= require('fs')


https.get('https://www.jd.com/?cu=true&utm_source=baidu-pinzhuan&utm_medium=cpc&utm_campaign=t_288551095_baidupinzhuan&utm_term=0f3d30c8dba7459bb52f2eb5eba8ac7d_0_564e1b381b7344e59ec2c213651b9c7f',(res)=>{
  let html = ''
  //res.on  类似于addEventListenner  用于监听数据
  res.on('data',(chunk) =>{
    html += chunk
  })
  //监听res数据加载完成，就执行我需要的效果
  res.on('end',()=>{
    // console.log(html);
    const $ = cheerio.load(html)
    //用一个数组来保存我们爬到的数据
    let allFilms = []

    $('.cate_menu_item').each(function(){
      const title =$('.cate_menu_lk',this).text()
      allFilms.push(title)
    }) 
    fs.writeFile('./classify.json',JSON.stringify(allFilms),(err)=>{
      if(!err) {
        console.log('文件写入完成');
      }
    })
  })
})