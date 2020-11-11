# 原始类型有几种？

string number boolean null undefined symbol

# null 是对象？

？
000 判断对象 nul 二进制全 0

# 原始类型和对象类型有什么差别

原始类型存的是值
对象存的是地址

# typeof

typeof 只能判断原始类型，null 除外
instanceof 只能判断引用类型

# 让 instanceof 也能判断原始类型

# instanceof 原理

# 类型转换

转为布尔值
转为数字
转为字符串

# 对象转原始值

对象在转类型的时候会调用内置的{{ToPrimitive}}

- 如果已经是原始类型，那就不用转换了
- 调用 x.valueOf()，如果转为了原始类型，就返回值
- 调用 x.toString(), 如果转为了原始类型，就返回值
- 如果还没有转为原始类型，就报错

# 四则运算

加法：运算中其中一方为字符串，另一方一定会转换成字符串，
如果一方不是数字或字符串，那就会把它转换成数字或字符串进行运算 a++b //+b:NaN

除加法外的运算，只要其中一方是数字，另一方一定会转为数字来运算

# == 和 === 区别 (index.js)

# 什么是闭包 （index.js)

# 深浅拷贝 copy.js

Object.assign() 如果拷贝属性是原始值类型，就是深拷贝
如果是引用类型，就是浅拷贝
JSON.parse(JSON.stringify())的缺陷
1. 会忽略undefined
2. 会忽略symbol
3. 不能序列化函数
4. 不能解决循环引用的对象

