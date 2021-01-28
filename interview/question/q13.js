var a = [0];
if ([0]) {
  console.log(a == true);
} else {
  console.log("hello");
}

// [] 为true
// == 隐式转换
// [0] == true
// [0] == 1
// '0' == 1
// 0 == 1
// false
