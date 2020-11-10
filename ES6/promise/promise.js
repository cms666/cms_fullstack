/* Promise.prototype.then = function () {};
class Promise {
  constructor() {}
  all() {}
} */

function xq() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("相亲！");
      resolve("成功");
      // reject('你太丑')
    }, 1000);
  });
}

function marry() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("结婚大吉！");
    resolve('洞房')
  }, 500);
})
}

function baby(){
  console.log('出生');
}

xq().then((res)=>{
  console.log(res);
  return marry()
  }).then((res1)=>{
    console.log(res1);
    baby()})
// .catch((err)=>{
//   console.log(err);
// });

