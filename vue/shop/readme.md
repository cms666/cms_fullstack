# 全栈目录结构
  - 前台  VUE
    - 用户端  VUE
    - 管理后台  REACT+ANTD
  - API后端 服务器端  NODE+JAVA
vue create ...frontend 前端
8080
express ...backend 后端 3000
mongodb 27017
前端 生命周期 mounted
axios
->  API 向后端通信
http://localhost:8080->:3000 跨域
- 后端接口先调通
  localhost:3000/users/:cms
  {
    name:'cms',
    sex:'男'
  }
  ^/api/v1/users/:cms
  1. url 响应  /api/
    添加路由 /api/v1
    app.use(启用路由)
  2. 返回JSON
  3. postman 模拟请求
  4. 前端请求
  5. 不只是域名，端口和协议不一样都算跨域
