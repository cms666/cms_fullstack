const router = require("koa-router")();
const userModel = require('../lib/mysql')
const controler = require('../controler/c-signup')


router.get("/signup",  async (ctx, next)=>{
  await ctx.render('signup',{
    session: ctx.session
  })
});

//点击注册按钮的响应事件
router.post("/signup",controler.postSignup)

module.exports = router;
