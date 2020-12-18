const Router = require("koa-router");
const router = new Router();
const user_controller = require('./../../app/controllers/user_controller')
router.post("/login", user_controller.login);// 拿到前端传过来的数据，去数据库匹配是否存在
router.post('/register',user_controller.register)

module.exports = router;
