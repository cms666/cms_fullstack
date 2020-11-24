let obj ={
  name:'js',
  age:18,
  sex:'boy'
}
/* for(let i=0;i<Object.keys(obj).length;i++){
  console.log(obj[Object.keys(obj)[i]]);
} */

//数组迭代，对象没有迭代
//for in 数组和对象  但会把数组原型上添加的属性遍历到
//for of 数组
/* for (let key in obj){
  console.log(obj[key]);
}
 */
Foo.prototype.name='cms'
function Foo(){
  this[100] = 'test-100'
  this[1] = 'test-1'
  this['b'] = 'bar-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this['A'] = 'bar-A'
  this['C'] = 'bar-C'

}
let bar = new Foo()
console.log(bar);
/* for(let key in bar){
  console.log(key+'  '+bar[key]);
} */
//ECMAScript 规范规定，数字属性应该按照索引值的大小升序排序，字符串属性按照创建的顺序