const mysql = require("mysql");
const config = require("./defaultConfig");

let pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT,
});

let allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err);
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
            connection.release();
          });
        }
      });
    });
  },
};

// 登录
let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username=${username} AND password=${userpwd}`;
  return allServices.query(_sql);
};

// 查找用户
let findUser = function (username) {
  let _sql = `select * from users where username=${username}`;
  return allServices.query(_sql);
};

// 注册
let insertUser = function (value) {
  let _sql = `insert into users set username=?,password=?`;
  return allServices.query(_sql, value);
};

//查找首页轮播列表
let findHomeSwiper = function () {
  let _sql = `select * from homeswiper`;
  return allServices.query(_sql);
};

//查找首页菜品列表
let findHomeFoodlist = function () {
  let _sql = `select * from foods`;
  return allServices.query(_sql);
};

//查找首页原材料列表
let findHomeMaterialList = function () {
  let _sql = `select * from material`;
  return allServices.query(_sql);
};

// 查找原材料详情
let findMaterialDetail = function (id) {
  let _sql = `select * from material where id=${id}`;
  return allServices.query(_sql);
};

//加入购物车
let addCart = function (value) {
  let _sql = `insert into cart set userid=?,materialid=?,count=?`;
  return allServices.query(_sql, value);
};
//查找购物车里是否有食材
let findCartMaterial = function (token, materialid) {
  let _sql = `select * from cart where userid=${token} and materialid=${materialid}`;
  return allServices.query(_sql);
};
//查询用户购物车
let findUserCart = function (token) {
  let _sql = `select * from cart where userid=${token}`;
  return allServices.query(_sql);
};

//修改购物车数据
let updateCart = function (value) {
  let _sql = `update cart set count=? where userid=? and materialid=?`;
  return allServices.query(_sql, value);
};

//根据id删除购物车某件食材
let deleteCart = function (id) {
  let _sql = `delete from cart where id=${id}`;
  return allServices.query(_sql);
};

//根据用户id和食材id删除购物车某件食材
let deleteCartByToken = function (token, id) {
  let _sql = `delete from cart where userid=${token} and materialid=${id}`;
  return allServices.query(_sql);
};

//查询菜品的详情
let getFoodDetail = function (id) {
  let _sql = `select * from foods where id=${id}`;
  return allServices.query(_sql);
};

//根据id查询菜品需要的食材
let getFoodMaterial = function (id) {
  let _sql = `select * from foodmaterial where foodid=${id}`;
  return allServices.query(_sql);
};

//得到指定地址
let getAddress = function (id) {
  let _sql = `select * from address where id=${id}`;
  return allServices.query(_sql);
};

//得到默认地址
let getDefaultAddress = function (id) {
  let _sql = `select * from address where userid=${id} and isDefault=1`;
  return allServices.query(_sql);
};

//增加地址
let addAddress = function (value) {
  let _sql = `insert into address set userid=?,name=?,tel=?,province=?,city=?,county=?,addressDetail=?,postalCode=?,isDefault=?`;
  return allServices.query(_sql, value);
};

//修改默认地址
let updateDefaultAddress = function (id){
  let _sql = `update address set isDefault=0 where id=${id}`;
  return allServices.query(_sql);
}

//获取所有地址
let getAllAddress = function (id){
  let _sql = `select * from address where userid=${id}`;
  return allServices.query(_sql);
}

//删除地址
let deleteAddress = function (id) {
  let _sql = `delete from address where id=${id}`;
  return allServices.query(_sql);
};

//修改地址
let editAddress = function(value){
  let _sql = `update address set name=?,tel=?,province=?,city=?,county=?,addressDetail=?,postalCode=?,isDefault=? where id=?`;
  return allServices.query(_sql, value);
}

//创建订单
let createOrder = function (value) {
  let _sql = `insert into orders set orderid=?,userid=?,time=?,address=?,total=?,ispay=?,isclose=?`;
  // let _sql = `select * from order`; //为啥不能用order?order是MySQL保留字
  return allServices.query(_sql, value);
};

//创建订单食材信息
let createOrderList = function (value){
  let _sql = `insert into orderlist set orderid=?,materialid=?,count=?`;
  return allServices.query(_sql, value);
}

//查询订单详情
let getOrderDetail = function(id){
  let _sql = `select * from orders where orderid=${id}`;
  return allServices.query(_sql);
}

//查询订单食材列表
let getOrderDetailList = function(id){
  let _sql = `select * from orderlist where orderid=${id}`;
  return allServices.query(_sql);
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
  updateCart,
  deleteCart,
  deleteCartByToken,
  getFoodDetail,
  getFoodMaterial,
  getAddress,
  getDefaultAddress,
  addAddress,
  updateDefaultAddress,
  getAllAddress,
  deleteAddress,
  editAddress,
  createOrder,
  createOrderList,
  getOrderDetail,
  getOrderDetailList,
};
