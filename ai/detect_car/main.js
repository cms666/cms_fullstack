const fs = require('fs')
const imageClassify= require('baidu-aip-sdk').ocr

const APP_ID='23082947'
const API_KEY='hsYngEfvgsQKZLMh9Th9qD9Y'
const SECRET_KEY='Fvb5YWQSfKQv7E5jPmZNV2gWLZIHMMW7'


//sync I/O async 同步
const image = fs.readFileSync('cp.jpg').toString('base64')
// console.log(image);

const options = {}
options['multi_detect']='true'
const client = new imageClassify(APP_ID,API_KEY,SECRET_KEY)

//http 协议
//云端 AI sdk
client.licensePlate(image,options).then((res)=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})