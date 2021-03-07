// koa 核心非常小，中间件，http服务封装req，res => ctx

// Koa 是一个类
let Koa = require('koa')
let app = new Koa()
app.use((ctx, next) => {
  ctx.body = 'hello koa'
})
app.listen(3000)