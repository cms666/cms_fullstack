const mysql = require('mysql')
const config = require('./defaultConfig')

let pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

let allServices = {
  query: function(sql,values) {
    return new Promise((resolve,reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql,values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

// 登录
let userLogin = function(username, userpwd) {
  let _sql = `select * from users where username="${username}" AND password="${userpwd}"`
  return allServices.query(_sql)
}

// 查找用户
let findUser = function(username){
  let _sql = `select * from users where username="${username}"`
  return allServices.query(_sql)
}

// 注册
let insertUser = function(value){
  let _sql = `insert into users set username=?,password=?`
  return allServices.query(_sql,value)
}

//查找首页轮播列表
let findHomeSwiper = function(){
  let _sql = `select * from homeswiper`
  return allServices.query(_sql)
}

//查找首页菜品列表
let findHomeFoodlist = function(){
  let _sql = `select * from foods`
  return allServices.query(_sql)
}

//查找首页原材料列表
let findHomeMaterialList = function(){
  let _sql = `select * from material`
  return allServices.query(_sql)
}

let insertNote = function(value){
  let _sql = `insert into note set useId=?,title=?,note_type=?,note_content=?,c_time=?,head_img=?,nickname=?`
  return allServices.query(_sql,value)
}

module.exports = {
  userLogin,
  findUser,
  insertUser,
  findHomeSwiper,
  findHomeFoodlist,
  findHomeMaterialList
}

