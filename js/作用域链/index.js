function test(){

}

//test.name  test.prototype
//test.[[scope]]   隐式属性，不能被拿出来使用

//test() ----> AO:{}--->回收

function a(){
  function b(){
    var b=222
  }
  var a=111
  b()
  console.log(a);
}
var global =100
a()

// a 定义 a.[[scope]]