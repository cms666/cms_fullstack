function partition(arr, left, right) {
  let i = left,
    j = right;
  let privt = arr[i];
  console.log(arr[i]);
  let privtnum = Math.pow(arr[i][0], 2) + Math.pow(arr[i][1], 2);
  while (i < j) {
    //在右边找到小于基准值的数，
    while (
      Math.pow(arr[j][0], 2) + Math.pow(arr[j][1], 2) >= privtnum &&
      i < j
    ) {
      j--;
    }
    arr[i] = arr[j];
    //在左边找到大于基准值的数
    while (
      Math.pow(arr[i][0], 2) + Math.pow(arr[i][1], 2) <= privtnum &&
      i < j
    ) {
      i++;
    }
    arr[j] = arr[i];
  }
  arr[i] = privt;
  return i;
}
var kClosest = function (points, K) {
  let left = 0,
    right = points.length - 1;
  let target = K;
  // if(K>=points.length) return points
  let i = partition(points, left, right);
  while (i !== target-1) {
    if (i < target) {
      left = i + 1;
    } else {
      right = i - 1;
    }
    i = partition(points, left, right);
  }
  points.splice(target);
  return points;
};
console.log(kClosest([[0,1],[1,0]],2));