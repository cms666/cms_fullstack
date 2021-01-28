var arr = [0,1,2]
arr[10] = 10

arr.filter(function(x){
  return x === undefined
})

//callback 只对拥有值的类型化数组下标调用。它不会对未定义的，被删除的或者没有赋值的下标调用
//[]