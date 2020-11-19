HTTP:超文本传输协议
输入url -> 看到页面
GET www.baidu.com HTTP/1.1
user-agent: xxx IE/chrome

上面这个格式，放到传输层(TCP,HTTP介于TCP,另外一个叫UDP)去

拿到响应

HTTP/1.1 200 ok
content -type:text/html
key: value

<doctype html>
<html>
<body>
百度一下
</body>
</html>

块级
- 独占一行
- 能设置宽度
BFC块级格式上下文
行内
- 水平都在一行上面
- 垂直方向:以当前行的base-line对齐
- 置换元素是能设置宽高
- 非置换元素不能宽高  （错误）

img ->行内 -> 设置高度

置换元素
内部的内容不受css 控制
```html
<img src="" />
<canvas />  
<input />
<iframe src="" />
<script src="" />
```
非置换元素
```
<div>
<span>
```

词法（静态）作用域：js c c++  跟调用时无关
动态作用域 bash