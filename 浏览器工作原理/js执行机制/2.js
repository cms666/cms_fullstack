//栈溢出
//调用栈是有大小的

// 1. 当JAVASCRIPT执行全局代码的时候，一定会编译全局代码并创建全局执行上下文，并且全局执行上下文只有一份
// 2. 当一个函数被调用，函数体内代码会被编译，创建函数执行上下文，函数执行结束之后，创建的函数执行上下文会被销毁
// 3. 当使用eval函数的时候，eval的代码会被编译，并创建执行上下文

//调用栈

// 用来管理函数调用关系的一个数据结构

var a = 2
function add(b, c){
  return b + c
}
function addAll(b, c){
  var d = 10
  result = add(b, c)
  return a + result + d
}
addAll(3, 6)

