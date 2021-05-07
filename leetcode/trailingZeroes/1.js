//乘阶后的零
var trailingZeroes = function (n) {
  let count = 0;
  while (n / 5 >= 1) {
    count += parseInt(n / 5);
    n /= 5;
  }
  return count;
};
console.log(trailingZeroes(30));


let a = new Map()
a.set('b',0)
a.forEach(item => {
  console.log(item);
})
for(let key of a.keys()){
  console.log(key);
}