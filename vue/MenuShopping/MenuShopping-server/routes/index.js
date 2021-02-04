const router = require("koa-router")();
const {
  findHomeSwiper,
  findHomeMaterialList,
  findHomeFoodlist,
} = require("../controllers/mysqlConfig");

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

router.get("/home", async (ctx, next) => {
  let data = {};
  let r = "";
  data.homeSwiper = await findHomeSwiper();
  data.homeFoodList = await findHomeFoodlist();
  data.homeMaterialList = await findHomeMaterialList();
  if (data.HomeSwiper || data.homeFoodList || data.HomeMaterialList) {
    r = "ok";
    ctx.body = {
      code: "80000",
      data: data,
      message: "首页数据获取成功",
    };
  } else {
    r = "error";
    ctx.body = {
      code: "80000",
      data: r,
      message: "首页数据获取失败",
    };
  }
});

module.exports = router;
