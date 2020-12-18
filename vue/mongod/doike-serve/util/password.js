const bcrypt = require('bcrypt')
// const password = require('../app/module/password')
// const { saltTimes } = require('../config')


//加密
const encrypt = async (password, saltTimes) =>{
  const hash = await bcrypt.hash(password, saltTimes)
  return hash
}

//解密比较
const validate = async (password, hash) =>{
  const math = await bcrypt.compare(password, hash)
  return math
}

module.exports ={
  encrypt,
  validate
}