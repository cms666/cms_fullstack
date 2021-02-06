const router = require("koa-router")();
const {
  userLogin,
  findUser,
  insertUser,
  findMaterialDetail,
} = require("../controllers/mysqlConfig");

router.prefix("/users");

//登录
router.get("/login", async (ctx, next) => {
  let username = ctx.request.query.username;
  let password = ctx.request.query.password;
  //把参数拿到数据库查询
  console.log(ctx.request.query);
  await userLogin(username, password)
    .then((res) => {
      console.log(res);
      let r = "";
      if (res.length) {
        r = "ok";
        let result = {
          id: res[0].id,
          username: res[0].username,
          password: res[0].password,
        };
        ctx.body = {
          code: "80000",
          data: result,
          message: "登录成功",
        };
      } else {
        r = "error";
        ctx.body = {
          code: "80004",
          data: r,
          message: "账号或密码错误",
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: "80002",
        data: err,
      };
    });
});

//注册
router.get("/register", async (ctx, next) => {
  let username = ctx.request.query.username;
  let password = ctx.request.query.password;
  //把参数拿到数据库查询
  console.log(ctx.request.query);
  await findUser(username).then(async (res) => {
    if (!res.length) {
      await insertUser([username, password]).then((res1) => {
        let r = "";
        if (res1.affectedRows != 0) {
          r = "ok";
          ctx.body = {
            code: "80000",
            data: r,
            message: "注册成功",
          };
        } else {
          r = "error";
          ctx.body = {
            code: "80004",
            data: r,
            message: "注册失败",
          };
        }
      });
    } else {
      ctx.body = {
        code: "80003",
        message: "用户名已存在",
      };
    }
  });
});

router.get("/account", async (ctx, next) => {
  // console.log(ctx.request.query);
  let data = Object.values(ctx.request.query);
  let arr = [];
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    let item = JSON.parse(data[i])
    let res = await findMaterialDetail(item.id);
    if (res.length) {
      let obj = res[0];
      obj.count = item.count;
      arr.push(obj);
    }
  }
  if (arr.length == data.length) {
    ctx.body = {
      code: '80000',
      data:arr,
      message:'查询成功'
    }
  }else{
    ctx.body = {
      code: '80004',
      data:'error',
      message:'查询失败'
    }
  }
});
module.exports = router;
