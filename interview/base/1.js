// let key1 = Symbol(1)
// let key2 = Symbol(1)

// console.log(key1===key2);

// console.log(typeof(null));

// let obj = {
//   name:'wn'
// }

// const a = []  //001
// const b = a
// b.push(1)

// function test(person){
//   person.age = 25
//   person = {
//     name:'yyy',
//     age:30
//   }
//   return person
// }
// const p1 = {
//   name:'xxx',
//   age:19
// }
// const p2 = test(p1)
// console.log(p1);

// 1. 函数传参是传递对象指针的副本
// 2. p1和person具有相同的指针 person被修改，p1也会被修改
// 3. person有了一个新的内存地址

// console.log(typeof({}));  //object  typeof不能判断的皆为object

// console.log('hello' instanceof String);  //false

class P{
  static [Symbol.hasInstance] (){   //Symbol.hasInstance让我们自定义instanceof
    return typeof x === 'string'
  }
}
console.log('hello' instanceof p);