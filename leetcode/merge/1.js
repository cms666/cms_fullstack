// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

var merge = function(nums1, m, nums2, n) {
  let len = m+n-1,
      len1 = m -1,
      len2 = n-1;
  while(len2>=0&&len1>=0){
    if(nums2[len2]>nums1[len1]){
      nums1[len--]=nums2[len2--];
    }else{
      nums1[len--]=nums1[len1--];
    }
  }
  if(len1<0){
     for(let i=0;i<=len2;i++){
       nums1[i]=nums2[i]
     }
  }
  return nums1
};
console.log(merge([5,6,7,0,0,0],3,[2,3,4],3));