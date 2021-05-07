/* 给定一个无重复元素的有序整数数组 nums 。
返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
列表中的每个区间范围 [a,b] 应该按如下格式输出：
"a->b" ，如果 a != b
"a" ，如果 a == b */

var summaryRanges = function (nums) {
  if(!nums.length) return []
  let newnums = [];
  let a = 0,
    b = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] !== 1) {
      a = i - b;
      b = i;
      if (a == 1) {
        newnums.push(nums[i - 1] + "");
      } else {
        newnums.push(nums[i - a] + "->" + nums[i - 1]);
      }
    }
  }
  if (nums.length - b === 1) {
    newnums.push(nums[nums.length - 1] + "");
  } else {
    newnums.push(nums[b] + "->" + nums[nums.length - 1]);
  }
  return newnums;
};

console.log(summaryRanges([]));
