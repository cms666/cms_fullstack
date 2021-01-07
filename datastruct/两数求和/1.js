//整数两个相等，返回下标
/* var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === target - nums[j]) {
        return [i, j];
      }
    }
  }
}; */

/* var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let n2 = target - nums[i];
    if (map.has(n2)) {
      return [map.get(n2), i];
    } else {
      map.set(n, i);
    }
  }
}; */

//双指针
//给定两个有序数组。合并排序输出
var twoSum = function (nums, target) {
  let i = nums.length - 1;
  let j = target.length - 1;
  let all = target.length + nums.length - 1;
  while ((i >= 0) & (j >= 0)) {
    if (nums[i] <= target[j]) {
      nums[all] = target[j];
      j--;
      all--;
    } else {
      nums[all] = nums[i];
      i--;
      all--;
    }
  }
  while (j >= 0) {
    nums[j] = target[j];
    j--;
 
  }
  return nums;
};
console.log(twoSum([1, 2, 4, 6], [2, 3, 4, 5]));
