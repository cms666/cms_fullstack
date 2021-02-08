const router = require("koa-router")();
const {
  createOrder,
  createOrderList,
  deleteCartByToken,
  findCartMaterial,
  getOrderDetail,
  getOrderDetailList,
  findMaterialDetail,
} = require("../controllers/mysqlConfig");
const {formatDate} = require('../controllers/util')

router.prefix("/order");

//生成订单
router.post('/createOrder', async (ctx, next) =>{
  console.log(ctx.request.body);
  let {token} = ctx.request.header
  let {id,address,total,ispay,orderlist} = ctx.request.body
  let time = Number(id)
  time = formatDate(time)
  console.log(time,id);
  ispay = ispay == 'true' ? 1 : 0

  await createOrder([id,token,time,address,total,ispay,0]).then(async res =>{
    console.log(res);
    let r = "";
    let sum = 0
    for(let i = 0; i < orderlist.length; i++){
      let res1 = await createOrderList([id,orderlist[i].id,orderlist[i].count])
      let res3 = await findCartMaterial(token,orderlist[i].id)
      if(res3.length){
        await deleteCartByToken(token, orderlist[i].id)
      }
      
      if(res1.affectedRows){
        sum++
      }
    }
    if (res.affectedRows && sum == orderlist.length) {
      r = "ok";
      ctx.body = {
        code: "80000",
        data: r,
        message: "下单成功",
      };
    } else {
      r = "error";
      ctx.body = {
        code: "80002",
        data: r,
        message: "下单失败",
      };
    }
  }).catch(err =>{
    ctx.body ={
      code:'80004',
      message:err
    }
  })
})


//查询指定订单详情
router.get('/getOrderDetail', async (ctx, next) =>{
  let {id} = ctx.request.query
  await getOrderDetail(id).then(async res =>{
    if(res.length){
      let obj = {}
      let arr = []
      obj.orderDetail = res[0]
      let res1 = await getOrderDetailList(id)
      if(res1.length){
        for(let i = 0; i < res1.length; i++){
          let res2 = await findMaterialDetail(res1[i].materialid)
          let obj2 = res2[0]
          obj2.count = res1[i].count
          arr.push(obj2)
        }
      }
      obj.orderDetailList = arr
      ctx.body = {
        code:'80000',
        data:obj,
        message:'某订单详情'
      }
    }else{
      ctx.body = {
        code:'80002',
        data:'err',
        message:'某订单详情获取失败'
      }
    }
  }).catch(err =>{
    ctx.body = {
      code:'80004',
      message:err
    }
  })
})
module.exports = router;
