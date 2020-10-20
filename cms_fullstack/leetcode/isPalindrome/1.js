var isPalindrome = function(x) {
  if(x<0){
    return false;
  }
  else{
    let ord = x;
    let now = 0;
    while(ord > 0){
        now = now * 10 + ord % 10;
        ord = Math.floor(ord / 10);
    }
    if(now==x){
      return true;
    }
    else{
      return false;
    }
  }
};
console.log(isPalindrome(121));