const router = require("koa-router")();
const userService = require("../controllers/mysqlConfig");

router.prefix("/users");

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

//注册
router.post("/userRegister", async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  let _nickname = ctx.request.body.nickname;
  console.log(_nickname, _username);
  if (!_nickname || !_username || !_userpwd) {
    ctx.body = {
      code: "80001",
      mess: "用户名或密码为空",
    };
  }
  let value = [_username, _userpwd, _nickname];
  await userService.findUser(_username).then(async (res) => {
    console.log(res);
    if (!res.length) {
      await userService.insertUser(value).then((res1) => {
        console.log(res1);
        let r = "";
        if (res1.affectedRows != 0) {
          r = "ok";
          ctx.body = {
            code: "80000",
            data: r,
            mess: "注册成功",
          };
        } else {
          r = "error";
          ctx.body = {
            code: "80004",
            data: r,
            mess: "注册失败",
          };
        }
      });
    } else {
      ctx.body = {
        code: "80003",
        mess: "用户名已存在",
      };
    }
  });
});

//登录
router.post("/userLogin", async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;

  // 把参数拿到数据库里查询
  await userService
    .userLogin(_username, _userpwd)
    .then((res) => {
      console.log(res);
      let r = "";
      if (res.length) {
        r = "ok";
        let result = {
          id: res[0].id,
          nickname: res[0].nickname,
          username: res[0].username,
        };
        ctx.body = {
          code: "8000",
          data: result,
          msg: "login success",
        };
      } else {
        r = "error";
        ctx.body = {
          code: "80004",
          data: r,
          msg: "login failed",
        };
      }
    })
    .catch((error) => {
      ctx.body = {
        code: "80002",
        data: error,
      };
    });
});

//
router.post("/findNoteListByType", async (ctx, next) => {
  let note_type = ctx.request.body.note_type;
  // console.log(note_type);
  await userService.findNoteListByType(note_type).then((res) => {
    // console.log(res);
    if (res.length) {
      let r = "ok";
      ctx.body = {
        code: "80000",
        data: res,
        mess: "查找成功",
      };
    } else {
      let r = "error";
      ctx.body = {
        code: "80001",
        mess: "暂无数据",
      };
    }
  });
});

router.post("/findNoteDetail", async (ctx, next) => {
  let note_id = ctx.request.body.note_id;
  // console.log(note_type);
  await userService.findNoteDetail(note_id).then((res) => {
    // console.log(res);
    if (res.length) {
      let r = "ok";
      ctx.body = {
        code: "80000",
        data: res[0],
        mess: "查找成功",
      };
    } else {
      let r = "error";
      ctx.body = {
        code: "80004",
        mess: "暂无数据",
      };
    }
  });
});

module.exports = router;
