//大整数相加
// add('99','9')='108
//'99'
//' 9'
function add(num1, num2) {
  let carry = 0,
    res = "";
  for (
    let i = num1.length - 1, j = num2.length - 1;
    i >= 0 || j >= 0;
    i--, j--
  ) {
    let a = Number(num1.charAt(i)) || 0;
    let b = Number(num2.charAt(j)) || 0;
    let sum = a + b + carry;
    sum >= 10 ? (carry = 1) : (carry = 0);
    res = (sum % 10) + res;
  }
  if (carry === 1) {
    res = 1 + res;
  }
  return res;
}
console.log(add('99991212','2324'));
