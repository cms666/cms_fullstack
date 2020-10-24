/* 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。 */
var climbStairs = function(n) {
  let count = [];
  count[1] = 1;
  count[2] = 2;
  for(let i = 3; i <= n; i++) {
    count[i] = count[i - 1] + count[i - 2];
  }
  return count[n];
};
console.log(climbStairs(3));