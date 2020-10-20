var removeElement = function(nums, val) {
  let j=0,length=nums.length;
  for(let i=0;i<length;i++){
    if(nums[i]!=val){
      nums[j++]=nums[i]
    }
  }
  return j
};
console.log(removeElement([1,1,2,3,2,3],2))