// function foo(b) {
//   var a=5
//   return a*b+10
// }
// function bar(x){
//   var y=3
//   return foo(x*y)
// }
// bar(2)

// let a = 0
// async function b(){
//   await (a = 1)
// }

// b()
// console.log(a);

// let a = 0
// let b = async () => {
//   await (a = 2)
//   console.log(a);
//   a = a + await 10
//   console.log('2', a) // -> '2' 10
// }
// b()
// a++
// console.log('1', a) // -> '1' 1

/* let a = 0
let b = async () => {
  await (a = 10)
  console.log('2', a) // -> '2' 10
}
b()

console.log('1', a) // -> '1' 1
 */

setTimeout(function () {
  console.log(1);
}, 0);
new Promise(function (resolve, reject) {
  console.log(2);
  resolve();
})
  .then(function () {
    console.log(3);
  })
  .then(function () {
    console.log(4);
  });
process.nextTick(function () {
  console.log(5);
});
console.log(6);
