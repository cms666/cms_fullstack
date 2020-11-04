//函数定义出来的那一刻就有prototype属性
Person.prototype.name='ss'

function Person(name){
  //this.name = name
}
var person = new Person()
console.log(person.name);


//它定义了构造函数制造出来的对象的公共祖先