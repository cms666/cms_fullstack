const router = require("koa-router")();
const csignin = require('../controler/c-signin')

router.post("/signin", csignin.postSigin);

module.exports = router;
