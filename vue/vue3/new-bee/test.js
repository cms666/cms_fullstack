/* var findRelativeRanks = function(nums) {
  let map = new Map(),
    res = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length; i++) {
    let index = map.get(nums[i])
    if ((i === 0)) {
      res[index] = "Gold Medal";
    } else if ((i === 1)) {
      res[index] = "Silver Medal";
    } else if ((i === 2)) {
      res[index] = "Bronze Medal";
    } else {
      res[index] = String(i+1);
    }
  }
  return res;
};
console.log(findRelativeRanks([1, 2, 3, 4, 5])); */
/* 
var checkPerfectNumber = function(num) {
  let mid = Math.floor(num ** 0.5)
  let sum = 0
  console.log(mid);
  for(let i = mid; i < num; i++){
    if(num % i === 0){
      sum += i + num / i
      console.log(sum);
    }
  }
  return sum + 1 === num
};
console.log(checkPerfectNumber(28)); */

var findRedundantConnection = function(edges) {
  let map = new Map();
  let arr = [];
  for (let i = 0; i < edges.length; i++) {
    let value1 = map.get(edges[i][0]);
    let value2 = map.get(edges[i][1]);
    console.log(value1,value2);
    if (value1) {
      map.set(edges[i][0], value1 + 1);
    } else {
      map.set(edges[i][0], 1);
    }
    if (value2) {
      map.set(edges[i][1], value2 + 1);
    } else {
      map.set(edges[i][1], 1);
    }
    if (map.get(edges[i][0]) === 2 && map.get(edges[i][1]) === 2) arr.push(edges[i]);
    console.log(map);
  }
  return arr[arr.length - 1];
};
console.log(
  findRedundantConnection([
    [1, 2],
    [1, 3],
    [2, 3],
  ])
);
