// 回文
// 上海自来水来自海上
let isVaild = function (str) {
  // 0 len-1
  // 1 len-2
  // 2 len-3
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    // 是不是 数字？ 字母？
    // 忽视
    if (!/[0-9a-zA-Z]/.test(str[i])) {
      // 正则表达式
      i++;
      continue; // 跳过下面的语句
    }
    if (!/[0-9a-zA-Z]/.test(str[j])) {
      // 正则表达式
      j--;
      continue; // 跳过下面的语句
    }
    if (str[i++].toLowerCase() !== str[j--].toLowerCase()) {
      return false;
    }
  }
  return true;
};
console.log(isVaild("上海自来水来自海上")); // true
console.log(isVaild("A man, a plan, a canal: Panama")); // true
