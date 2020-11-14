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