const Koa = require("koa");
const cors = require('koa2-cors')
var bodyParser = require('koa-bodyparser'); 
const mongoose = require('mongoose');  //mongodb连接
const config = require('./config.js')
const app = new Koa();

//建立mongodb的连接
mongoose.connect(config.db,{useNewUrlParser: true,},(err)=>{
  if(err){
    console.log('failed');
  }else{
    console.log('connecting database successfully');
  }
})

app.use(cors())  //解决跨域
app.use(bodyParser());  //帮助koa解析参数

const user_router = require('./routes/api/user_router')
app.use(user_router.routes());

app.listen(3000);
