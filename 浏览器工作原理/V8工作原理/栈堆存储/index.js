/* function foo(){
  var a = 1
  var b = 2
  a = 2
  console.log(a);
  console.log(b);
}
foo()

function foo2(){
  var a = {name: '杨宝'}
  var b = a
  a.name = 'hh'
  console.log(a);
  console.log(b);
} */

/* var bar;
bar = 12
bar = 'hello'
bar = true
bar = null
bar = {name:'cms'} */

function foo(){
  var a = 'cms'
  var b = a
  var c = {name:'cms'}
  var d = c
}
foo2()

function foo() {
  var myName = "甘总";
  let test1 = 1;
  const test2 = 2;
  var innerbar = {
    getName: function () {
      console.log(test1);
      return myName;
    },
    setName: function (newName) {
      myName = newName;
    },
  };
  return innerbar;
}
var bar = foo();
bar.setName("杨宝");
bar.getName();
console.log(bar.getName());