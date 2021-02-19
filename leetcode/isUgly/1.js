//丑数

var isUgly = function (num) {
  if (num < 1) return false;
  while ((num & 1) == 0) {  //注意符号运算优先级
    num >>= 1;
  }
  while (num % 3 == 0) {
    num /= 3;
  }
  while (num % 5 == 0) {
    num /= 5;
  }
  return num === 1;
};
console.log(isUgly(8));
