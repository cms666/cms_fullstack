let arr = [1, [1, [1, 2]]];
/* let res = [];
function falten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      falten(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(falten(arr)); */

// console.log(arr.toString());

//reduce
/* function falten(arr){
  return arr.reduce(function(pre,next){
    return pre.concat(Array.isArray(next) ? falten(next):next)
  },[])
} */


//扩展运算符
function falten(arr){
  while(arr.some(item => Array.isArray(item))){
    arr = [].concat(...arr)
  }
  return arr
}
console.log([].concat(...arr));
