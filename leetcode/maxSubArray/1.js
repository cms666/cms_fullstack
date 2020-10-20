var maxSubArray = function(nums) {
  let ans = nums[0];
  let sum = 0;
  for(const num of nums) {
      if(sum > 0) {
          sum += num;
      } else {
          sum = num;
      }
      ans = Math.max(ans, sum);
  }
  return ans;
};
console.log(maxSubArray([-2,3,-1,1,-1,-9,9]));