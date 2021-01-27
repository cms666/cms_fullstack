//s使用栈来实现队列的以下操作
// push(x)
// pop()
// peek()
// empty()
var maxSlidingWindow = function(nums, k) {
  if(!nums.length) return []
  let arr=[]
  let left = 0
  let right = k -1
  let m = 0
  getMax(nums, left, right)
  while(right < nums.length){
    console.log(m);
    if(left > m){
      getMax(nums, left, right)
      arr.push(nums[m])
    }else if(nums[right] > nums[m]){
      arr.push(nums[right])
      m = right
      }else{
        arr.push(nums[m])
      }
    right++
    left++
  }
  function getMax(nums, left, right){
    let temp = 0
    let max = nums[left]
    // console.log(left,right);
    for(let i = left + 1; i <= right; i++){
      if(nums[i] > max){
        max = nums[i]
        m = i
        temp = 1
      }
    }
     if(temp == 0) m = left
    //  console.log(m);
  }
  return arr
};
console.log(maxSlidingWindow([-6,-10,-7,-1,-9,9,-8,-4,10,-5,2,9],7));