//给定一个 haystack 字符串和一个 needle 字符串，
//在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
var strStr = function(haystack, needle) {
  let hlength=haystack.length,nlength=needle.length,length=0,newstr='';
  if(nlength==0){
    return 0
  }
  for(let i=0;i<hlength;i++){
    if(haystack[i]==needle[0]){
      if((hlength-i+1)<nlength){
        return -1
      }
      for(let j=i;j<i+nlength;j++){
        newstr=newstr+haystack[j]
      }
      if(newstr==needle){
        return i;length++;break
      }
      else{
        newstr=''
      }
    }
  }
  if(length==0){
    return -1
  }
};
console.log(strStr('aaaaa',''))