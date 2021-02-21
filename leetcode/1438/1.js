var longestSubarray = function (nums, limit) {
  let left = 0,
    right = 0,
    min = nums[0],
    len = 0;
  while (right < nums.length) {
    if (Math.abs(nums[right] - min) > limit) {
      let i = left + 1;
      for (; i < right; i++) {
        if (Math.abs(nums[right] - nums[i]) <= limit) {
          left = i;
          min = nums[i];
          break;
        }
      }
      if (i == right) {
        left = right;
        min = nums[right];
      }
    } else {
      min = Math.min(min, nums[right]);
      len = Math.max(len, right - left + 1);
    console.log(len);

    }
    right++;
  }
  return len;
};
console.log(longestSubarray([2,5,2], 9));
