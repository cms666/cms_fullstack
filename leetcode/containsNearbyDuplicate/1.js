/* 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，
使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。 */
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        if (j - i <= k) {
          return true;
        }
      }
    }
  }
  return false;
};
console.log(containsNearbyDuplicate([1,0,1, 1], 1));
