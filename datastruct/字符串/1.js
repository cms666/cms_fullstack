let s = "yassay";

function isPalindrome(str) {
  let mid = parseInt(str.length / 2);
  for (let i = 0, j = str.length - 1; i < mid; ) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome(s));

