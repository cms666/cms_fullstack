const User_col = require('../module/user')
const PassWord = require('../module/password')
const passport = require('../../util/password')
const config = require('../../config')
const {v1:uuidv1} = require('uuid')

//登录
const login = async (ctx)=>{
  console.log(ctx.request.body);
  let req = ctx.request.body
  //连接数据库，去数据库里查找是否有该数据
  //查找语句
  //获取用户的userid
  const user = await User_col.findOne({
    account: req.username
  })
  if(!user){
    ctx.status = 200
    ctx.body={
      code:0,
      msg:'账号不存在'
    }
    return
  }
  //能找到账号
  const userId = user.userId

  //查密码
  const pass = await PassWord.findOne({
    userId
  },{
    hash:1
  })
  //如果在密码表找到了账号相同的id
  //判断该id的密码与前端密码是否匹配
  //解密
  const match = await passport.validate(req.password ,pass.hash)
  ctx.status = 200
  if(match){
    ctx.body={
      code:1,
      msg:'登录成功',
      data:user
    }
    return
  }
  ctx.body={
    code:0,
    msg: '密码错误'
  }
}


//注册
const register = async (ctx)=>{
  let req = ctx.request.body
  const user = await User_col.findOne({
    account: req.username
  })
  if(user){
    ctx.status =400 
    ctx.body={
      code:0,
      msg:'账号已存在'
    }
    return
  }
  const userId = uuidv1()
  const newUser = await User_col.create({
    userId:userId,
    account:req.username
  })
  if(newUser){
    const match = await passport.encrypt(req.password,config.saltTimes)
    const pass = await PassWord.create({
      userId:userId,
      hash:match
    })
    if(pass){
      ctx.body={
        code:1,
        msg:'注册成功',
        data:{
          userId:newUser.userId,
          account:newUser.account
        }
      }
    }
  }
}
module.exports = {
  login,
  register
}