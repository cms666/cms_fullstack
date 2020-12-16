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
  let _sql = `select * from users where username="${username}" AND userpwd="${userpwd}"`
  return allServices.query(_sql)
}

// 查找用户
let findUser = function(username){
  let _sql = `select * from users where username="${username}"`
  return allServices.query(_sql)
}

// 注册
let insertUser = function(value){
  let _sql = `insert into users set username=?,userpwd=?,nickname=?`
  return allServices.query(_sql,value)
}

//根据分类查找对应的文章列表
let findNoteListByType = function(noteType){
  let _sql = `select * from note where note_type="${noteType}"`
  return allServices.query(_sql)
}


module.exports = {
  userLogin,
  findUser,
  insertUser,
  findNoteListByType
}

