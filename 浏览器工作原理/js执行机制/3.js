//var缺陷以及为什么要引入let 和 const

//作用域
//作用域就是变量和函数的可访问范围

//块级作用域

function foo(){
  var a = 1
  let b = 2
  {
    let b = 3
    var c = 4
    let d = 5
    console.log(a);
    console.log(b);
  }
  console.log(b);
  console.log(c);
  console.log(d);
}
foo()