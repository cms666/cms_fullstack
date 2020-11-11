//1 == '1'
// 1. 两者类型相同，相同的话就比大小
// 2. 类型不同，那么就进行类型转换
// 3. 判断是否在对比null和undefined，是的话就会返回true
// 4. 判断两者是否是string和number，是的话就将string转为number
// 5. 判断其中一方是否为Boolean，是的话就把Boolean转为number
// 6. 判断其中一方是否为object，且另一方为string、number或者symbol。
//    是的话就把object转为原始值进行判断

//[] == []  //false
// 引用类型是判断指针是否相同

// [] == ![]  //true
// [] == false
// [] == 0
// '' == 0
// 0 == 0

//闭包
// function A(){
//   let a = 1
//   window.B = function(){
//     console.log(a);
//   }
// }
// A()
// B()

for (var i = 1; i <= 5; i++) {
  setTimeout(
    function timer(i) {
      console.log(i);
    },
    i * 1000,
    i
  );
}
