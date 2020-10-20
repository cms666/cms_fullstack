var romanToInt = function(s) {
  let arr = s.split('');
  let num = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]+arr[i+1]=='IV'){
      num = num + 4;
      i = i + 1;continue;
    }
    if(arr[i]+arr[i+1]=='IX'){
      num = num + 9;
      i = i + 1;continue;
    }
    if(arr[i]+arr[i+1]=='XL'){
      num = num + 40;
      i = i + 1;continue;
    }
    if(arr[i]+arr[i+1]=='XC'){
      num = num + 90;
      i = i + 1;continue;
    }
    if(arr[i]+arr[i+1]=='CD'){
      num = num + 400;
      i = i + 1;continue;
    }
    if(arr[i]+arr[i+1]=='CM'){
      num = num + 900;
      i = i + 1;continue;
    }
    if(arr[i]=='I'){
      num = num +1;
    }
    if(arr[i]=='V'){
      num = num +5;
    }
    if(arr[i]=='X'){
      num = num +10;
    }
    if(arr[i]=='L'){
      num = num +50;
    }
    if(arr[i]=='C'){
      num = num +100;
    }
    if(arr[i]=='D'){
      num = num +500;
    }
    if(arr[i]=='M'){
      num = num +1000;
    }
  }
  if(1<=num&&num<=3999){
    return num;
  }
  else{
    return 'beyond';
  }
};
console.log(romanToInt('MCMXCIV'));