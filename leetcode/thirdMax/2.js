var thirdMax = function (nums) {
  let min = Number.MIN_SAFE_INTEGER,
    mid = Number.MIN_SAFE_INTEGER,
    max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      min = mid;
      mid = max;
      max = nums[i];
    }
    if (nums[i] < max && nums[i] > mid) {
      min = mid;
      mid = nums[i];
    }
    if (nums[i] > min && nums[i] < mid) {
      min = nums[i];
    }
  }
  return min === Number.MIN_SAFE_INTEGER ? max : min;
};
