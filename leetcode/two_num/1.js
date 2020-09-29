//函数自声明
// //类型？ object
// function twoSum(){
// }
//函数表达式
// twoSum 常量 匿名表达式
//undefined 变量的值未定义
//变量 值
//let twoSum;
//console.log(twoSum)
//函数是功能的集合，代码的集合
//单独的集合

//数据可视化  webGL

/**
 * leetcode 1 两数相加
 * @param {Array} nums 
 * @param {integer} target 
 * @return Array []
 */
const twoSum = function(nums,target){
  // 怎么实现?
  // 暴力一下
  // 两层循环
  let i,
    j,
    len= nums.length;
  for(i=0;i<len-1;i++){
    for(j=i+1;j<len;j++){
      if(nums[i]+nums[j]==target){
        return[i,j];
      }
    }
  }
  return [];
}
console.log(twoSum([2,7,11,19],9));