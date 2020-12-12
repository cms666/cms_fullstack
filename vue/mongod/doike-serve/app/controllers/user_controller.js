const User_col = require('../module/user')
const PassWord = require('../module/password')
const login = async(ctx)=>{
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
}

module.exports = {
  login
}