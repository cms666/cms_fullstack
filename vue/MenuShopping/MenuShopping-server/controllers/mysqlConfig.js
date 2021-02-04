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

// 查找原材料详情
let findMaterialDetail = function(id){
  let _sql = `select * from material where id="${id}"`
  return allServices.query(_sql)
}

//加入购物车
let addCart = function(value){
  let _sql = `insert into cart set userid=?,materialid=?,count=?`
  return allServices.query(_sql,value)
}
//查找购物车里是否有食材
let findCartMaterial = function(token, materialid){
  let _sql = `select * from cart where userid="${token}" and materialid="${materialid}"`
  return allServices.query(_sql)
}
//查询用户购物车
let findUserCart = function(token){
  let _sql = `select * from cart where userid="${token}"`
  return allServices.query(_sql)
}
module.exports = {
  userLogin,
  findUser,
  insertUser,
  findHomeSwiper,
  findHomeFoodlist,
  findHomeMaterialList,
  findMaterialDetail,
  addCart,
  findCartMaterial,
  findUserCart,
}

