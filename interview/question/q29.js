let arr = [1, 2, , 3, 0]

//1. arr的长度
//2. 取出arr中的空项
let res = arr.filter(item => item != undefined)
console.log(res);

//arr 和 arr2 合并成arr3 的结果
let arr2 = [1, NaN, NaN]
let arr3 = arr.concat(arr2)
console.log(arr3);

let arr4 = new Set(arr3)
console.log([].concat(...arr4));
