var longestSubarray = function (nums, limit) {
  let left = 0,
    right = 0,
    min = nums[0],
    max = nums[0]
    len = 0;
  while (right < nums.length) {
    min = Math.min(min, nums[right])
    max = Math.max(max, nums[right])
    if(Math.abs(max - min) > limit){
      min = nums[left + 1]
      max = nums[left + 1]
      for (let i = left + 1; i <= right; i++) {
        min = Math.min(min, nums[i])
        max = Math.max(max, nums[i])
      }
      left++
      console.log(min,max);
    }
    len = Math.max(len, right - left + 1);
    right++;
  }
  return len;
};
console.log(longestSubarray([1,5,6,7,8,10,6,5,6], 4));
