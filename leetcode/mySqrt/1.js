var mySqrt = function(x) {
  let halfx = Math.round(x/2);
  for (let i=0;i<=halfx+1;i++){
    if(i * i == x) return i
    if(i * i >x) return i-1
  }
};
console.log(mySqrt(2));