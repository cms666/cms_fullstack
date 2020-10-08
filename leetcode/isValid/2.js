/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = [];
  let len = s.length;
  if (len % 2) return false;
  for (let i = 0; i < len; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      arr.push(s[i]);
    } else {
      if (s[i] == ")" && arr.pop() !== "(") {
        return false;
      }
      if (s[i] == "]" && arr.pop() !== "[") {
        return false;
      }
      if (s[i] == "}" && arr.pop() !== "{") {
        return false;
      }
    }
  }
  return !arr.length;
};
console.log(isValid('{[]}'));
