// 作用域链

function bar() {
  console.log(myName);
}

function foo() {
  var myName = "蜗牛";
  bar();
}

var myName = "cms";

foo();
//词法作用域：根据代码的位置来决定的，不是看函数怎么调用的
//要看结果是多少，就要看作用域链是怎么走的，要知道作用域链怎么走的，就要看词法作用域怎么嵌套的

//块级作用域查找

(function () {
  console.log(name); //'cms'
})();
let name = "cms";

console.log(name); //error
let name = "cms";

function foo() {
  var myName = "甘总";
  let test1 = 1;
  const test2 = 2;
  var innerbar = {
    getName: function () {
      console.log(test1);
      return myName;
    },
    setName: function (newName) {
      myName = newName;
    },
  };
  return innerbar;
}
var bar = foo();
bar.setName("杨宝");
bar.getName();
console.log(bar.getName());

//闭包：在js中，根据词法作用域的规则，内部函数总是可以访问外部函数中生命的变量，
//当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束，但是
//内部函数引用外部函数的变量依然存在内存之中，我们称这些变量的为闭包的产物，这些变量的集合称为闭包

//闭包怎么回收
// 1. 如果引用的闭包的函数是一个全局变量，那么这个闭包就会一直存在到页面关闭
// 1. 如果引用的闭包的函数是一个局部变量，等函数销毁后，在下一次JavaScript引擎执行垃圾回收时，
//判断闭包不在使用了才被垃圾回收
