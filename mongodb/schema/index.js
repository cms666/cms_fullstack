//数据库驱动
const mongoose = require('mongoose')
//将物理的数据存储转变为一个json对象
//Scheme 帮我们创建类 ，给我们api
//只要看到了Scheme，就相当于看到了表结构
const Schema = mongoose.Schema

const articleSchema =new Schema({
  title:String,
  date:Date,
  content:String
})
const linkSchema = new Schema({
  name:String,
  href:String,
  newPage:Boolean
})
const userSchema = new Schema({
  name:String,
  password:String,
  email:String,
  emailCode:String,
  createTime:Number,
  articles:[articleSchema],
  links:[linkSchema]
})

const User = mongoose.model('User',userSchema)
new User({
  name:'tmp',
  password:'0000',
  email:'cms@163.com',
  emailCode:'11232',
  createTime:Date.now(),
  articles:[],
  links:[]
}).save(()=>{})
mongoose.connect('mongodb://127.0.0.1:27017/test')

const db = mongoose.connection;
db.on('error',()=>{
  console.log('db error');
})
db.once('open',()=>{
  console.log('db open');
})

