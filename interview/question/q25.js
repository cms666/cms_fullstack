function foo() {}
var oldName = foo.name;
foo.name = 'bar'  //函数名不可修改

[oldName, foo.name]  //['foo','foo']
