var mySqrt = function(x) {
  if(x == 0 || x ==1){
      return x;
  }
  var left = 1;
  var right = x;
  while(left <= right){
     var middle = Math.floor((left + right)/2);
     if(middle*middle == x){
         return middle;
     }else if(middle*middle > x){
         right = middle-1;
     }else{
         left = middle+1;
     }
  }
  return right;
};
console.log(mySqrt(4));