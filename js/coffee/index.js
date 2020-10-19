//talk in js
//一杯咖啡
// es5 类  大写的函数
// 1. 把水煮开
// 2. 用沸水冲泡咖啡
// 3. 把咖啡倒进杯子
// 4. 加糖和牛奶
//constructor
//类是抽象的
//实例化对象
//封装的人
var Coffee = function (type) {
  //{}
  this.type=type
};
//原型
Coffee.prototype.boilWater = function () {
  console.log("把水煮开");
};
Coffee.prototype.brewCoffeeGriends = function () {
  console.log("用沸水冲泡咖啡");
};
Coffee.prototype.pureInCup = function () {
  console.log("把咖啡倒进杯子");
};
Coffee.prototype.addSugerAndMilk = function () {
  console.log("加糖和牛奶");
};
Coffee.prototype.init = function () {
  this.boilWater();
  this.brewCoffeeGriends();
  this.pureInCup();
  this.addSugerAndMilk();
};
var coffee = new Coffee('某咖啡');
console.log(coffee.type);
console.log(coffee.__proto__==Coffee.prototype);
coffee.init();
//class
//js 类 怎么构建 = 火车头  构造函数(首字母大写)
//好多节车厢  prototype
//构造函数和普通函数区别  new
//函数是一等对象
// console.log();
//js本没有类 任何函数都有一个prototype属性，只有对象
//原型链上面object
console.log(Coffee.prototype.__proto__.__proto__);
console.log(coffee.constructor);
