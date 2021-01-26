var a = {}
var b = Object.prototype

[a.prototype === b, Object.getPrototypeOf(a) == b]

//对象没有prototype属性

//[false, true]