const fs = require('fs')
const imageClassify= require('baidu-aip-sdk').imageClassify

const APP_ID='23082454'
const API_KEY='4FofGqc4a3fbI1QrfjLkzFuV'
const SECRET_KEY='k1nkGYX43GQFjH6CG7zwX8AhvGdIFvOp'


//sync I/O async 同步
const image = fs.readFileSync('保时捷tan.jpg').toString('base64')
// console.log(image);

const client = new imageClassify(APP_ID,API_KEY,SECRET_KEY)

//http 协议
//云端 AI sdk
client.carDetect(image).then((res)=>{
  console.log(res.result[0]);
}).catch(err=>{
  console.log(err);
})