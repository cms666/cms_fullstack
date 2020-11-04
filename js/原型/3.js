/* Person.prototype.lastname = 'c'
function Person(name){
  this.name = name
}
var person = new Person('cms')
//person.lastname ='y'    //没有改变原型属性，在自己的对象中添加属性
delete Person.prototype.lastname
console.log(person.lastname); */

// function Bus(){

// }
// Car.prototype={
//   constructor:Bus
// }
function Car(){

}
var car =new Car()
console.log(car.constructor);  //function Bus(){}
//constructor 指向的是Car,目的是让Car()构造出来的对象能找到它的构造函数