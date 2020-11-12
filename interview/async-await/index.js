// function a(){
//   return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log('aaa');
//     resolve('a')
//   },1000)})
// }
// function b(){
//   console.log('bbb');
// }
// a().then(b)

function timeout(ms){
  return new Promise(resolve=>{
    setTimeout(()=>{
      console.log('你好');
      resolve()
    },ms)
  })
}

//声明该函数内部可能存在异步情况
async function asyncPrint(value,ms){
  await timeout(ms) //阻塞后面的代码
  console.log(value);  //去到微任务队列
}
asyncPrint('hello',1000)