let arr = [{a:1},{a:2},{a:3}]
//map 映射
//函数式
let newarr = arr.map((item)=>{
  return item.a
})
let newarr1 = arr.map((item)=>{
  return `<li>${item.a}</li>`
})
let arr2 =[1,2,3,4,5]
//reduce 循环  叠加
//pre =>0
let sum = arr2.reduce((pre,item)=>{
  return pre+item
},0)

let arr3 =[{a:1},{b:2},{c:3}]
//{a:1,b:2,c:3}
let arr4= arr3.reduce((pre,item)=>{
  return {
    //展开
    ...pre,
    ...item
  }
  //Object.assign()
},{})
console.log(arr4);