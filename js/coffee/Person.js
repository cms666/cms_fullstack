function Person() {} //构造函数
Person.prototype.type = "object named Person";
console.dir(Person);

person = new Person(); //new “继承”
res = person instanceof Person; //检查person是否为Person的实例
console.log(res); //true

res = person.type; //实例可以“继承”原型属性
console.log(res); //object named Person

res = person.__proto__ === Person.prototype; //实例通过__proto__访问原型
console.log(res); //true

res = Person.prototype.constructor === Person; //原型通过constructor访问构造函数
console.log(res); //true

res = person.__proto__.constructor === Person; //实例访问构造函数
console.log(res); //true

res = Reflect.ownKeys(person); //尝试获取自身属性
console.log(res); //[] person自身并没有这个属性（“继承”可以引用原型方法，本身不会复制方法）

res = person.type; //实例找到并访问原型上的方法
console.log(res); //object named Person

//原型链
function People() {}
People.prototype = new Person(); //People原型“继承”Person

p = new People(); //p“继承”People
res = [p instanceof Object, p instanceof Person, p instanceof People]; //p实例同时属于这三者
console.log(res); //[true,true,true]

res = p.type; //找到原型链上的方法
console.log(res); //object named Person

//通过__proto__访问原型链上的原型，直到顶层Object构造函数为止
res = p.__proto__;
console.log(res); //Person{}

res = p.__proto__.__proto__;
console.log(res); //Person{type:'object named Person'}

res = p.__proto__.__proto__.__proto__;
console.log(res); //{}

res = p.__proto__.__proto__.__proto__.__proto__;
console.log(res); //null
