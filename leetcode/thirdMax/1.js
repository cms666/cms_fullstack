//第三大的数
var thirdMax = function (nums) {
  if (nums.length == 1) return nums[0];
  let min = 0,
    mid = 0,
    max = 0,
    count = 0,
    temp = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != [nums[i - 1]] && temp == 0) {
      count++;
      console.log(min,mid,max);
      if (count === 1) {
        min = Math.min(nums[i], nums[i - 1]);
        max = Math.max(nums[i], nums[i - 1]);
      }
      if (nums[i] != min && nums[i] != max && min != max) {
        if (nums[i] > max) {
          mid = max;
          max = nums[i];
        }
        if (nums[i] < max && nums > min) {
          mid = nums[i];
        }
        if (nums[i] < min) {
          mid = min;
          min = nums[i];
        }
        temp++;
      }
    }
    console.log(min,mid,max);
    if (temp == 1) {
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
  }
  if (min != mid && min != max && mid != max) {
    return min;
  } else {
    return max;
  }
};
console.log(thirdMax([1,2,3]));