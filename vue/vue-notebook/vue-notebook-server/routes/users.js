const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig')

router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })


router.post('/userLogin', async(ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd

  // 把参数拿到数据库里查询
  await userService.userLogin(_username,_userpwd).then(res => {
    console.log(res);
    let r = '';
    if (res.length) {
      r = 'ok';
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: '8000',
        data: result,
        msg: 'login success'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        msg: 'login failed'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: '80002',
      data: error,
    }
  })

})

module.exports = router
