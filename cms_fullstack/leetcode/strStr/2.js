var strStr = function(haystack, needle) {
  let hlength=haystack.length,nlength=needle.length,length=0;
  if(nlength==0){
    return 0
  }
  for(let i=0;i<hlength-nlength+1;i++){
    if(haystack[i]==needle[0]){
      if(haystack.slice(i,i+nlength)==needle){
        length++;return i;
      }
    }
  }
  if(length==0){
    return -1
  }
};