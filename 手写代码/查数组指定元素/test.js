function sortedIndex(array, obj) {
  let left = 0,
    right = array.length;
  while (left < right) {
    let index = parseInt((left + right) / 2);
    if (array[index] < obj) {
      left = index + 1;
    } else {
      right = index-1;
    }
  }
  return left;
}
console.log(sortedIndex([3,5,7], 4));
