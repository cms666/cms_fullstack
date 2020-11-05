//类包装
//原始值是不能有属性和方法的，属性和方法是对象独有的


var num = 4
num.len=3
//new Number(4).len = 3
//delete num.len

console.log(num.len);// new Number(4).len

var arr = [1,2,3,4,5]
arr.length=2
console.log(arr); //[1,2]

var str = 'abcd'
str.length=2
//new String('abcd').length=2     delete str.length
console.log(str);  //'abcd'    new String('abcd').length

//面试题
var str = 'abc'
str +=1
var test = typeof(str)
if(test.length==6){
  test.sign = 'typeOf的返回结果可能是String'
}
console.log(test.sign);