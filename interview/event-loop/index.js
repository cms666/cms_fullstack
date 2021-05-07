async function async1() {
  console.log('async1 start');//宏2
  await async2();  
  console.log('async1 end');
 }
 async function async2() {
  console.log('async2 start'); //宏3
  return new Promise((resolve, reject) => {  //宏任务4  ！！！！
   resolve();
   console.log('async2 promise');
  })
 }
 console.log('script start');//宏1
 setTimeout(function() {  //宏任务异步1
  console.log('setTimeout');
 }, 0);  
 async1();
 new Promise(function(resolve) {  
  console.log('promise1');  // 宏任务 5！！！！！
  resolve();
 }).then(function() {
  console.log('promise2'); //微任务1
 }).then(function() {
  console.log('promise3'); //微任务2
 });
 console.log('script end');  //宏6
 

// console.log(1);
// async function bar() {
//   await fn()  //立即执行
//   console.log(6); //微任务队列
// }
// function fn() {
//   console.log(7);
// }
// function foo() {
//   return new Promise((resolve) => {
//     console.log(2);
//     resolve()
//   })
// }
// bar()
// console.log(3);

// foo().then(() => {
//   console.log(4);  //微任务队列
// })
// console.log(5);
