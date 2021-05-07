//给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
//笨方法
var majorityElement = function(nums) {
  let newnums = nums.sort()
  return newnums[parseInt(nums.length/2)]
};