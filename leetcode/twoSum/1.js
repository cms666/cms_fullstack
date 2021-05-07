/* 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。 */
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] == target) {
      return [left + 1, right + 1];
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }
};
