// 统计所有小于非负整数 n 的质数的数量。
var countPrimes = function (n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    let m = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        m = 1;
      }
    }
    if (m === 0) {
      count++;
    }
  }
  return count;
};
console.log(countPrimes(10));
