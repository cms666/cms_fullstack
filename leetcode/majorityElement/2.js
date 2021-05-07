//摩尔投票法
var majorityElement = function(nums) {
  let count = 1;
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (res == nums[i])
      count++;
    else {
      count--;
      if (count == 0) {
        res = nums[i + 1];
      }
    }
  }
  return res;
};