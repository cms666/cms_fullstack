var num = 123
//var num = new Number(123)
//Number.prototype.__proto__ = Object.prototype
Number.prototype.toString = function(){return 'hh'}  //方法重写
num.toString()  //'123'



