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
console.log(checkPerfectNumber(28));
