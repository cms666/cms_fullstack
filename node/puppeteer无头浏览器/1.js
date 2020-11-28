const puppeteer = require("puppeteer");
const $ = require('cheerio')

async function run() {
  const browser =await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://juejin.cn/books", {
    waitUntil: "networkidle0",
  });
  // await page.screenshot({
  //   path: "./jujin.png",
  // });
  //获取html之前，执行几次下拉动作
  await page.evaluate(function(){
    function req(){
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          document.querySelector('.copy-right').scrollIntoView()
          resolve()
        }, 2000);
      })
    }
    async function run(){
      for(let i=0;i<3;i++){
        await req()
      }
    }
    return run()
  })
  //第一页的数据
  const html = await page.content()
  // console.log(html);
  const books = $('.info',html)
  let booksInfo = []
  books.each(function(){
    const book = $(this);
    let name = $(book.find('.title')).text().trim();
    let auth = $(book.find('.author-name')).text().trim();
    booksInfo.push({
      name,auth
    })
  })
  const fs = require('fs')
  fs.writeFile('./books.json',JSON.stringify(booksInfo,null,2),(err)=>{
    if(!err){
      console.log('写入成功');
    }
  })
  await browser.close();
}
run();
