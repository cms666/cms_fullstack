/* var isPerfectSquare = function(num) {
  let left = 1;
  let right = num;
  while(left<right){
    let mid = left + ((right-left)>>1)
    let newmid = num /mid
    console.log(newmid);
    if(newmid===mid){
      return true
    }else if(newmid<mid){
      right = mid
    }else{
      left = mid+1
    }
  }
  return false
};
console.log(isPerfectSquare(9)); */

/* var findTheDifference = function(s, t) {
  s = s.split('')
  for(let i = 0;i<t.length;i++){
    if(s.indexOf(t[i])===-1){
      return t[i]
    }else{
      s.splice(s.indexOf(t[i]),1)
      console.log(s);
    }
  }
};
console.log(findTheDifference('abcd','abcde')); */

/* var isSubsequence = function (s, t) {
  let a = -1;
  for (let i = 0; i < s.length; i++) {
    for( let j = i;j<s.length;i++){
      if(s[i]===t[j]&&j>a){
        a=j
      }else{
        return false
      }
    }
  }
  return true;
};
console.log(isSubsequence("abccd", "ahbgcdcd"));
 */
/* var lastStoneWeight = function(stones) {
  
  while(stones.length){
    stones.sort((a,b)=>a-b)
    console.log(stones);
    let diff = stones[stones.length-1]-stones[stones.length-2]
    if(diff===0){
      stones.splice(stones.length-2,2)
    }else{
      stones.splice(stones.length-2,2)
      stones.push(diff)
    }
    if(stones.length===1) return stones[0]
  }
  return 0
};
console.log(lastStoneWeight([8,10,4])); */
/* 
var longestPalindrome = function (s) {
  // if (s.length<2) return s.length;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let geti = map.get(s[i]);
    if (geti) {
      map.set(s[i], geti + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  let count = 0;
  for (let [key, value] of map) {
    if ((value&1)===0) {
      count += value;
    }else if((count&1)===0){
      count += value
    }else{
      count += value - 1
    }
  }
  return count
};
console.log(longestPalindrome("18")); */

/* var maxSlidingWindow = function (nums, k) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let newNums = nums;
    if (i + 1 >= k) {
      newNums = newNums.slice(i - k + 1, i + 1).sort((a, b) => b - a);
      console.log(newNums);
      arr.push(newNums[0]);
    }
  }
  return arr;
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
 */

/* var arrangeCoins = function(n) {
  if(n<=1) return n
  let left = 0,right = n
  function sum(mid){
    return (mid*(mid+1))/2
  }
  while(left<right){
    let mid = left+parseInt((right-left)/2)
    console.log(mid);
    if(sum(mid)<=n&&sum(mid+1)>n){
      return mid
    }else if(sum(mid)<n){
      left = mid+1
    }else{
      right = mid
    }
  }
};
console.log(arrangeCoins(0)); */

/* var largeGroupPositions = function(s) {
  if(s.length<2) return []
  let count =1,arr=[]
  for(let i=1;i<s.length;i++){
    if(s[i]===s[i-1]){
      count++
    }else{
      console.log(count);
      if(count>=3){
        console.log(arr);
        arr.push([i-count,i-1])
      }
      count = 1
    }
  }
  return arr
};
console.log(largeGroupPositions("abbxxxxzzy")); */

/* var repeatedSubstringPattern = function(s) {
  let len = parseInt(s.length/2)
  for(let i = 0 ; i < len; i++){
    if(s.length % (i+1) === 0){
      let temp = s.substr(0,i+1)
      console.log(temp);
      let j = 0
      for( ; j < s.length-i; j += i+1){
        if(temp !== s.substr(j,i+1)) break
      }
      if( j === s.length ) return true
      console.log(j);
    }
  }
  return false
};
console.log(repeatedSubstringPattern("ababab")); */

/* var findComplement = function (num) {
  num = num.toString(2);
  let complement = 0;
  let i = 0;
  let len = num.length;
  console.log(num);
  while (i < len) {
    console.log(num,(num&1));
    if (!(num&1)) {
      complement += 2 ** i;
      console.log(complement);
    }
    i++;
    // num=num.toString(2) >> 1;
    num=num.substring(0,num.length-1);

  }
  return complement;
};
console.log(findComplement(18));
 */

/* var licenseKeyFormatting = function (S, K) {
  let newS = "";
  S = S.toUpperCase();
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== "-") {
      newS += S[i];
    }
  }
  let init = newS.length % K;
  let formatting = "";
  if (init !== 0) {
    for (let i = init; i < newS.length; i += K) {
      formatting += "-" + newS.slice(i, i + K);
    }
    return newS.slice(0, init) + formatting;
  } else {
    for (let i = 0; i < newS.length; i += K) {
      formatting += newS.slice(i, i + K) + "-";
    }
    return formatting.substr(0, formatting.length - 1);
  }
}; */

/* var constructRectangle = function (area) {
  let mid = Math.ceil(area ** 0.5);
  while (area % mid !== 0) {
    mid++
  }
  return [mid, area/mid]
};
console.log(constructRectangle(2));
 */

/* var checkRecord = function (s) {
  let a = 0,
    l = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      a++;
      l = 0;
    } else if (s[i] === "L") {
      l++;
    } else {
      l = 0;
    }
    if (l === 3 || a === 2) return false;
  }
  return true;
};
console.log(checkRecord("PLALLP")); */

/* var containsPattern = function(arr, m, k) {
  for(let i = 0; i <= arr.length - m * k; i++){
    let j = i
    for(; j < i + m * k -m; j++){
      if(arr[j] !== arr[j + m]) break
      console.log(j);
    }
  
    if(j - i + m === m * k) return true
  }
  return false
};
console.log(containsPattern(
  [1,2,1,2,1,1,1,3],2,3));
 */

// var maximumProduct = function(nums) {
//   if(nums.length <= 2) return false
//   let min = Number.MIN_SAFE_INTEGER
//   let mid = Number.MIN_SAFE_INTEGER
//   let max = Number.MIN_SAFE_INTEGER
//   let minmin = Number.MAX_SAFE_INTEGER
//   let minmid = Number.MAX_SAFE_INTEGER
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] < minmin){
//       minmid = minmin
//       minmin = nums[i]
//     }else if( nums[i] >= minmin && nums[i] < minmid){
//       minmid = nums[i]
//     }
//   }
//   console.log(minmin,minmid);
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] > max){
//       min = mid
//       mid = max
//       max = nums[i]
//     }else if(nums[i] <= max && nums[i] > mid){
//       min = mid
//       mid = nums[i]
//     }else if(nums[i] > min && nums[i] <= mid){
//       min = nums[i]
//     }
//   }
//   return min * mid * max
// };
// console.log(maximumProduct([3,3,3,4]));

/* var addToArrayForm = function (A, K) {
  let len = A.length - 1,
    curadd = 0,
    arr = [];
  while (len >= 0 || K != 0) {
    let onek = K % 10;
    let newA = len < 0 ? 0 : A[len];
    console.log(newA);
    let cursum = newA + onek + curadd;
    curadd = cursum >= 10 ? 1 : 0;
    arr.unshift(cursum % 10);
    K = Math.floor(K / 10);
    len--;
  }
  if (curadd == 1) arr.unshift(1);
  return arr;
};
console.log(addToArrayForm([7, 7, 2, 0, 0], 34000)); */
/* 
function convert(list) {
  const obj = {}
  const res = []
  list.forEach(item => {
    obj[item.id] = item
  })
  list.forEach(item => {
    if (item.parentId !== 0) {
      obj[item.parentId]['children'] ? obj[item.parentId]['children'].push(item) : obj[item.parentId]['children'] = [item]
    } else {
      res.push(item)
    }
  })
  return res
}
let list =[
  {id:1,name:'部门A',parentId:0},
  {id:2,name:'部门B',parentId:0},
  {id:3,name:'部门C',parentId:1},
  {id:4,name:'部门D',parentId:1},
  {id:5,name:'部门E',parentId:2},
  {id:6,name:'部门F',parentId:3},
  {id:7,name:'部门G',parentId:2},
  {id:8,name:'部门H',parentId:4}
];
console.log(convert(list)); */

// var maxSatisfied = function(customers, grumpy, X) {
//   let maxsum = 0, sum = 0,max = 0
//   for(let i = 0; i < X; i++){
//     if(grumpy[i] === 1){
//       maxsum += customers[i]
//     }else{
//       sum += customers[i]
//     }
//   }
//   for(let i = X; i < grumpy.length; i++){
//     if(grumpy[i] === 1){
//       if(grumpy[i - X] === 1){
//         maxsum = maxsum - customers[i - X] + customers[i]
//       }else{
//         maxsum = maxsum + customers[i]
//       }
//     }else{
//       if(grumpy[i - X] === 1){
//         maxsum = maxsum - customers[i - X]
//       }
//       sum += customers[i]
//     }
//     console.log(max,maxsum);
//     max = Math.max(maxsum, max)
//   }
//   return sum + max
// };

// console.log(maxSatisfied([1,0,1,2,1,1,7,5],[0,1,0,1,0,1,0,1],3));

var nextGreaterElements = function (nums) {
  const n = nums.length;
  const ret = new Array(n).fill(-1);
  const stk = [];
  for (let i = 0; i < n * 2 - 1; i++) {
    let num = nums[i / n];
    while (stk.length && nums[stk[stk.length - 1]] < num) {
      ret[stk[stk.length - 1]] = num;
      stk.pop();
    }
    stk.push(i % n);
    console.log(stk, ret);
  }
  return ret;
};

console.log(nextGreaterElements([2, 1, 3, 1]));
