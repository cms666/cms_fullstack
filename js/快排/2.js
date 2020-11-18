function partition(arr, left, right) {
  let i = left,
    j = right;
  let privt = arr[i];
  while (i < j) {
    //在右边找到小于基准值的数，
    while (arr[j] >= privt && i < j) {
      j--;
    }
    arr[i] = arr[j];
    //在左边找到大于基准值的数
    while (arr[i] <= privt && i < j) {
      i++;
    }
    arr[j] = arr[i];
  }
  arr[i] = privt;
  return i
}
var findKthLargest = function(nums, k) {
  let left = 0,right = nums.length-1;
  let target = nums.length-k
  let i = partition(nums,left,right)
  while(i!==target){
    if(i<target){
      left = i+1
    }else{
      right = i-1
    }
    i=partition(nums,left,right)
  }
  return nums[i]
};
