//生成16位随机的数字
String(Math.random()).split(".")[1].slice(0, 16);
let res = Math.random() * (10e16);
console.log(res);
