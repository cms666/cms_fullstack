import Stack from './lib/stack'  //es6 模块化引入
import ObjStack from './lib/StackObj';
const stack = new Stack();
stack.push("第一条数据")
stack.push("第二条数据")
stack.pop()

console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.toString());
console.log(stack.clear());


const decimalToBinary = function (decNumber: number) {
  let stack = new Stack();  //入栈每一个位
  let number = decNumber
  let rem; //余数
  let binaryString = "";
  while (number > 0) {
    rem = Math.floor(number % 2)
    stack.push(rem)
    number = Math.floor(number / 2)
  }
  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString()
  }
  return binaryString
}
const decimalToBinaryObjStack = function (decNumber) {
  const stack = new ObjStack();
  let number = decNumber;
  let rem; //余数
  let binaryString = "";
  while (number > 0) {
    rem = Math.floor(number % 2)
    stack.push(rem)
    number = Math.floor(number / 2)
  }
  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString()
  }
  return binaryString
}
const testNumber = 99999999999998
console.time("数组栈")
console.log(decimalToBinary(testNumber));
console.timeEnd("数组栈")
const ObjtestNumber = 99999999999998
console.time("对象栈")
console.log(decimalToBinaryObjStack(ObjtestNumber));
console.timeEnd("对象栈")




