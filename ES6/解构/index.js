// let [a,b,c] = [1,2,3]

//let [a,b,...c] = [1,2,3,4,5,6,7]
//console.log(c) 34567

// let [a,b,...c] =[1]
// console.log(c); //[]

//set
// let arr = [1,2,2,3,4,3,4]
// let newarr = new Set(arr)
// console.log(newarr);

// let [x,y,z] = {a:'a',b:'b',c:'c'}
// console.log(x);  //错

// let [x,y,z] = new Set(['a','b','c'])
// console.log(x);  //a

// let [foo = true] = [false]  //默认
// console.log(foo);

/* let [x,y='b']=['a',undefined]  //undefined 相当于没赋值
console.log(y); */

// let [x,y='b']=['a',null]
// console.log(y);

// let {y,x,z} = {x:'aaa',y:'bbb'}
// console.log(x);  //aaa  对象解构与数组不同  与key对应

// let {log,sin,cos,abs} = Math
// console.log(abs(-2));  //2

// const {log} = console
// log(123)

// let { foo: baz } = { foo: "aaa", bar: "bbb" };
// console.log(foo);  //出错key 取不到  用baz取值

// let obj = {
//   p:['hello',{y:'world'}]
// }
// let {p:[x,{y}]} = obj
// console.log(x+y);

const [a,b,c,d,e] = 'hello'
console.log(c);  //l