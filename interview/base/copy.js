//什么是浅拷贝？  如何实现？  深？
let a = {
  age:1,
  info:{
    name:'wn'
  }
}
// let b = JSON.parse(JSON.stringify(a))  //深拷贝  但对undefined和symbol类型 无效
// a.age = 2
// console.log(b.age);
let b = Object.assign({},a)
a.age = 2
a.info.name = '蜗牛'
console.log(b.info.name);  //蜗牛
console.log(b.age);  //1

// let c = {
//   age:1,
//   jobs:{
//     first:'coding'
//   }
// }
// let d = {...c}
// c.jobs.first = 'dd'
// c.age = 2
// console.log(d.age);
// console.log(d.jobs.first); //dd

let c = {
  age:1,
  jobs:{
    first:'coding'
  }
}
let d = JSON.parse(JSON.stringify(c))
c.jobs.first = 'dd'
c.age = 2
console.log(d.age);
console.log(d.jobs.first); //coding

let obj = {
  a:1,
  b:{
    c:2,
    d:3
  }
}
obj.c = obj.b
