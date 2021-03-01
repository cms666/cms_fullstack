const router = require("koa-router")();
const {
  findMaterialDetail,
  addCart,
  findCartMaterial,
  findUserCart,
  updateCart,
  deleteCart,
  getFoodDetail,
  getFoodMaterial,
  searchGoods,
  findHomeFoodlist,
  findHomeMaterialList,
  getCategoryFoodData,
  findSearchText,
  insertSearchText,
  relevance,
} = require("../controllers/mysqlConfig");

router.prefix("/material");

//食材详情
router.get("/detail", async (ctx, next) => {
  console.log(ctx.request.query);
  const id = ctx.request.query.id;
  let r = "";
  await findMaterialDetail(id)
    .then((res) => {
      console.log(res);
      if (res.length) {
        r = "ok";
        ctx.body = {
          code: "80000",
          data: res[0],
          message: "查找原材料详情成功",
        };
      } else {
        r = "error";
        ctx.body = {
          code: "80004",
          data: r,
          message: "查找原材料详情失败",
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

//添加食材进购物车
router.post("/addCart", async (ctx, next) => {
  console.log(ctx.request.header.token);
  let token = ctx.request.header.token;
  let id = ctx.request.body.id;
  let count = ctx.request.body.count;
  let res = await findCartMaterial(token, id);
  if (res.length) {
    ctx.body = {
      code: "80002",
      data: res[0].id,
      message: "已存在，请勿重复添加",
    };
  } else {
    await addCart([token, id, count]).then((res) => {
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
          message: "请登录",
        };
      }
    });
  }
});

//查找用户购物车
router.post("/getCart", async (ctx, next) => {
  let token = ctx.request.header.token;
  console.log(token);
  if (token) {
    await findUserCart(token)
      .then(async (res) => {
        console.log(res);
        if (res.length) {
          for (let i = 0; i < res.length; i++) {
            let data = await findMaterialDetail(res[i].materialid);
            res[i].material = data[0];
          }
          console.log(res);
          ctx.body = {
            code: "80000",
            data: res,
            message: "查找成功",
          };
        } else {
          ctx.body = {
            code: "80001",
            data: [],
            message: "购物车为空",
          };
        }
      })
      .catch((err) => {
        ctx.body = {
          code: "80004",
          data: err,
          message: "error",
        };
      });
  } else {
    ctx.body = {
      code: "80003",
      message: "请登录",
    };
  }
});

//修改购物车数据
router.get("/updateCart", async (ctx, next) => {
  let id = ctx.request.query.id;
  let count = ctx.request.query.count;
  let token = ctx.request.header.token;

  console.log(id, token, count);
  await updateCart([count, token, id])
    .then((res) => {
      console.log(res);
      if (res.changedRows) {
        ctx.body = {
          code: "80000",
          message: "修改成功",
        };
      } else {
        ctx.body = {
          code: "80002",
          message: "修改失败",
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: "80004",
        data: err,
        message: "出错了",
      };
    });
});

//删除购物车数据
router.delete("/deleteCart", async (ctx, next) => {
  let id = ctx.request.query.id;
  console.log(id);
  await deleteCart(id)
    .then((res) => {
      console.log(res);
      if (res.affectedRows) {
        ctx.body = {
          code: "80000",
          message: "删除成功",
        };
      } else {
        ctx.body = {
          code: "80002",
          message: "删除失败",
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: "80004",
        data: err,
      };
    });
});

//查询菜品详情
router.get("/getFoodDetail", async (ctx, next) => {
  let id = ctx.request.query.id;
  let alldata = {};
  await getFoodDetail(id)
    .then(async (res) => {
      alldata.foodDetail = res[0];
      alldata.foodMaterial = [];
      let data = await getFoodMaterial(id);
      for (let i = 0; i < data.length; i++) {
        let obj = {};
        obj.id = data[i].materialid;
        obj.materialid = data[i].materialid;
        obj.count = 1;
        let material = await findMaterialDetail(data[i].materialid);
        obj.material = material[0];
        alldata.foodMaterial.push(obj);
      }
      if (alldata.foodMaterial || alldata.foodMaterial.length) {
        ctx.body = {
          code: "80000",
          data: alldata,
          message: "总算查完了",
        };
      } else {
        ctx.body = {
          code: "80002",
          data: "error",
          message: "已经不想干了",
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: "80004",
        data: err,
      };
    });
});

//把食谱的食材加进购物车
router.post("/addFoodCart", async (ctx, next) => {
  let token = ctx.request.header.token;
  let data = Object.values(ctx.request.body);
  console.log(data);
  if (token) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      let res = await findCartMaterial(token, data[i].id);
      let res1, res2;
      if (res.length) {
        let count = Number(data[i].count) + Number(res[0].count);
        res1 = await updateCart([count, token, data[i].id]);
        if (res1.affectedRows) {
          sum++;
        }
      } else {
        res2 = await addCart([token, data[i].id, data[i].count]);
        if (res2.affectedRows) {
          sum++;
        }
      }
    }
    if (sum == data.length) {
      ctx.body = {
        code: "80000",
        data: "ok",
        message: "加入成功",
      };
    } else {
      ctx.body = {
        code: "80004",
        data: "error",
        message: "加入失败",
      };
    }
  } else {
    ctx.body = {
      code: "80003",
      message: "请登录",
    };
  }
});

//搜索
router.get("/searchGoods", async (ctx, next) => {
  let { type, pageNum, searchText } = ctx.request.query;
  let mhText = "";
  for (let i = 0; i < searchText.length; i++) {
    mhText += "%" + searchText[i];
  }
  mhText += "%";
  pageNum = Number(pageNum);
  await searchGoods(type, mhText)
    .then(async (res) => {
      let obj = {};
      let arr = [];
      if (res.length) {
        if (searchText) {
          let res2 = await findSearchText(searchText);
          if (!res2.length) {
            await insertSearchText(searchText);
          }
        }

        obj.pageNum = Math.floor(res.length / 10);
        let tail =
          pageNum * 10 + 10 < res.length ? pageNum * 10 + 10 : res.length;
        arr = res.slice(pageNum * 10, tail);
        obj.list = arr;
        ctx.body = {
          code: "80000",
          data: obj,
          message: "ok",
        };
      } else {
        ctx.body = {
          code: "80002",
          data: obj,
          message: "没有搜索的你想要的",
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: "80004",
        message: err,
      };
    });
});

//分类数据
router.get("/getCategoryData", async (ctx, next) => {
  let res1 = await findHomeFoodlist();
  let res2 = await findHomeMaterialList();
  let result = [];
  if (res1.length && res2.length) {
    let map = new Map();
    res1.forEach((item) => {
      let cur = map.get(item.classify);
      if (cur) {
        cur.push(item);
        map.set(item.classify, cur);
      } else {
        let arr = [];
        arr.push(item);
        map.set(item.classify, arr);
      }
    });
    let count = 0;
    for (let key of map.keys()) {
      let obj = {};
      obj.name = key;
      obj.id = count++;
      obj.type = 0;
      obj.categoryData = map.get(key);
      result.push(obj);
    }
    console.log(result);
    map.clear();

    res2.forEach((item) => {
      let cur = map.get(item.classify);
      if (cur) {
        cur.push(item);
        map.set(item.classify, cur);
      } else {
        let arr = [];
        arr.push(item);
        map.set(item.classify, arr);
      }
    });
    for (let key of map.keys()) {
      let obj = {};
      obj.name = key;
      obj.id = count++;
      obj.type = 1;
      obj.categoryData = map.get(key);
      result.push(obj);
    }
    ctx.body = {
      code: "80000",
      data: result,
      message: "分类列表",
    };
  } else {
    ctx.body = {
      code: "80002",
      data: result,
      message: "数据库不会为空",
    };
  }
});

//切换tab数据
router.get("/getTabFoodData", async (ctx, next) => {
  let { type } = ctx.request.query;
  await getCategoryFoodData(type)
    .then((res) => {
      if (res.length) {
        ctx.body = {
          code: "80000",
          data: res,
          message: "各类美食",
        };
      } else {
        ctx.body = {
          code: "80002",
          data: [],
          message: "该分类没有美食哦~",
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: "80004",
        message: err,
      };
    });
});

//搜索关联
router.get('/relevance', async(ctx, next)=>{
  let { searchText } = ctx.request.query;
  let mhText = "";
  for (let i = 0; i < searchText.length; i++) {
    mhText += "%" + searchText[i];
  }
  mhText += "%";
  await relevance(mhText).then(res =>{
      ctx.body = {
        code:'80000',
        data:res.length ? res : [],
        message:'别人搜了欸'
      }
  }).catch(err =>{
    ctx.body = {
      code:'80004',
      message:err
    }
  })
})
module.exports = router;
