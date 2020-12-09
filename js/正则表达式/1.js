//量词
//{1，2}
var reg = /ab{2,5}/

//内容
var reg1 = /aba|abb/

var reg2 = /a[123]b/

var reg3 = /[1-3a-b]/  //或者

var reg5 = /\d/
// [0-9] \d
//[0-9a-zA-Z_] \w
var reg4 = /#[0-9a-zA-Z]{3}|#[0-9a-zA-Z]{6}/

var reg6 = /[01][0-9]|2[0-3]:[0-5][0-9]/

var reg7 = /^([0-9]{4,})-(0[0-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/




console.log(reg.test('babb')); 
console.log(reg1.test('babb')); 
console.log(reg3.test('sdfdfb')); 
console.log(reg4.test('#asd')); 
console.log(reg5.test('54'));
console.log(reg4.exec('#aswe')); 
console.log(reg6.test('18'));
console.log(reg7.test('1812-1-1'));

let reg8 = /a/g  //细节
let str='aaa'
console.log(reg8.test(str));
console.log(reg8.test(str));
console.log(reg8.test(str));
console.log(reg8.lastIndex);
console.log(reg8.test(str));
console.log(reg8.lastIndex);
console.log(reg8.test(str));

