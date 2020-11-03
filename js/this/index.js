/* function identify(){
  return this.name.toUpperCase()
}
function speak(){
  var greeting = 'Hello ' + identify.call(this)
  console.log(greeting);
}

var me = {
  name:'wn'
}
var you = {
  name:'cms'
}
speak.call(me)
 */


/* function foo() {
  let person = {
    name: "wn",
  };
  console.log(this);
}
function bar() {
  let person = {
    name: "cms",
  };
  foo();
}
bar(); */

/* function foo(){
  console.log(this.a);
}
var a = 2
(function(){
  "use strict"
  foo() //严格模式下，foo的调用，与位置无关
}()) */

/* function foo(){
  console.log(this.a);
}
var obj2 = {
  a:3,
  foo:foo   //引用    隐式绑定
}
var obj1 = {
  a:2,
  obj2:obj2
}

obj1.obj2.foo()
 */

/*  //隐式绑定丢失
function foo(){
  console.log(this.a);
}
var obj= {
  a:3,
  foo:foo   //引用    隐式绑定
}
var bar = obj.foo  //引用
var a = 'hello'
bar() */



var a =2
function foo(){
  var a =4
  console.log(this.a);
}
var obj= {
  a:3,
  foo:foo()
}

foo()
obj.foo  //引用

