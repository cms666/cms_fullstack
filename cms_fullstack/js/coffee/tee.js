// 1. 把水煮开
// 2. 用沸水浸泡茶引
// 3. 把茶水倒进杯子
// 4. 加柠檬
var Tee = function () {

}
Tee.prototype.boilWater = function() {
  console.log('把水煮开');
}
Tee.prototype.brewTeeGriends = function () {
  console.log("用沸水浸泡茶引");
};T
Tee.prototype.pureInCup = function () {
  console.log("把茶水倒进杯子");
};
Tee.prototype.addLemon = function () {
  console.log("加柠檬");
};
Tee.prototype.init=function(){
  this.boilWater()
  this.brewTeeGriends()
  this.prototype()
  this.addLemon()
}
var tee = new Tee()
tee.init()