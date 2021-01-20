// arguments
function sidEffecting(ary){ //[1,1,10]
  ary[0] = ary[2] //[10,1,10]
}

function bar(a, b, c){ //1 1 1
  c= 10 //1 1 10
  sidEffecting(arguments) // 参数变量和arguments是双向绑定的
  return a + b + c
}

bar(1,1,1) //21