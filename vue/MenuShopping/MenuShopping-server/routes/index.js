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
  let res = await findHomeSwiper();
  data.homeSwiper = res;
  let res1 = await findHomeFoodlist();
  data.homeFoodList = res1.slice(0, 5);
  let res2 = await findHomeMaterialList();
  data.homeMaterialList = res2.slice(0, 5);
  console.log(data);
  if (
    res.length &&
    res1.length &&
    res2.length
  ) {
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
