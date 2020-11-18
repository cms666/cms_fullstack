//分区
function cb(a,b){
  return a-b
}
function partition(arr, left, right) {
  if (left >= right) return;
  let privt = arr[left];
  let i = left,
    j = right;
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
  partition(arr, left, i - 1);
  partition(arr, i + 1, right);
}
function sort(arr) {
  partition(arr, 0, arr.length - 1);
  console.log(arr);
}
sort([3, 4, 5, 4, 2, 8]);
