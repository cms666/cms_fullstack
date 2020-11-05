var obj ={
  name:'wn',
  age:18
}
// var obj = new Object()
var obj1 = Object.create(obj)
console.log(obj1.__proto__);  //obj



//网易面试题
//所有对象最终都会继承自Object.prototype  ???
//不是  有特例
//var obj = Object.create(null)  空
//obj.__proto__={}  手动添加原型没用
