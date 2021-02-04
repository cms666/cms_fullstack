const router = require("koa-router")();
const { findMaterialDetail,addCart,findCartMaterial,findUserCart} = require("../controllers/mysqlConfig");

router.prefix("/material");

//食材详情
router.get("/detail", async (ctx, next) => {
  console.log(ctx.request.query);
  const id = ctx.request.query.id;
  let r = "";
  await findMaterialDetail(id).then((res) => {
    console.log(res);
    if (res.length) {
      r = "ok";
      ctx.body = {
        code: "80000",
        data: res[0],
        message: "查找原材料详情成功",
      };
    }else{
      r = "error";
      ctx.body = {
        code: "80004",
        data: r,
        message: "查找原材料详情失败",
      };
    }
  }).catch(err => {
    ctx.body = {
      code:'80002',
      data:err,
    }
  });
});

//添加食材进购物车
router.post("/addCart", async (ctx, next) => {
  console.log(ctx.request.header.token);
  let token = ctx.request.header.token
  let id = ctx.request.body.id
  let count = ctx.request.body.count
  let res = await findCartMaterial(token,id)
  if(res.length){
    ctx.body={
      code:'80002',
      data:res[0].id,
      message:'已存在，请勿重复添加'
    }
  }else{
    await addCart([token,id,count]).then(res =>{
      console.log(res);
      let r = "";
      if (res.affectedRows != 0) {
        r = "ok";
        ctx.body = {
          code: "80000",
          data: res.insertId,
          message: "添加成功",
        };
      } else {
        r = "error";
        ctx.body = {
          code: "80004",
          data: r,
          message: "添加失败",
        };
      }
    })
  }
});

//查找用户购物车
router.post("/getCart", async (ctx,next)=>{
  let token = ctx.request.header.token
  console.log(token);
  await findUserCart(token).then(async res =>{
    for(let i = 0; i < res.length; i++){
      let data = await findMaterialDetail(res[i].materialid)
      res[i].material = data[0]
    }
    ctx.body = {
      code:'80000',
      data:res,
      message:'查找成功'
    }
  }).catch(err=>{
    ctx.body ={
      code:'80004',
      data:err,
      message:'error'
    }
  })
})
module.exports = router;
