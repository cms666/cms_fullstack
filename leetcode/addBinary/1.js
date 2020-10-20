/* 给你两个二进制字符串，返回它们的和（用二进制表示）。
输入为 非空 字符串且只包含数字 1 和 0。 */
var addBinary = function (a, b) {
  let add = [];
  let newa = a.split("").reverse().join("");
  let newb = b.split("").reverse().join("");
  if (newa.length > newb.length) {
    for (let i = 0; i < newa.length; i--) {
      if (newa[newa.length - 1] == 2) {
        add.push(01);
        return add.reverse();
      }
      if (newa[i] + newb[i] == 2) {
        add.push(0);
        newa[i + 1]++;
      }
      if (newa[i] + newb[i] == 3) {
        add.push(1);
        newa[i + 1]++;
      }
      if (newa[i] + newb[i] == 0 || newa[i] + newb[i] == 1) {
        add.push(newa[i] + newb[i]);
      }
    }
    return add.reverse();
  }
};
console.log(addBinary('1100','11'));
