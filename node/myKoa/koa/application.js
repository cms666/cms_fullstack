let http = require('http')
let context = require('./context')
let request = require('./request')
let response = require('./response')
class Koa {
  constructor() {
    this.callbackFn;
    this.middlewares = [];
    this.context = context;
    this.request = request;
    this.response = response
  }

  use (cb) {
    this.middlewares.push(cb)
  }

  createContext(req, res) {
    // 深拷贝
    let ctx = Object.create(this.context) // 希望ctx可以拿到context但是不修改context
    ctx.request = Object.create(this.request)
    ctx.response = Object.create(this.response)
    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res
    return ctx // 返回上下文对象
  }

  compose(ctx, middlewares) {
    function dispath(index) {
      if (index === middlewares.length) return Promise.resolve()
      let middleware = middlewares[index]
      return Promise.resolve(middleware(ctx, () => dispath(index + 1)))
    }
    return dispath(0)
  }

  handleRequest(req, res) {
    res.statusCode = 404 // 默认页面找不到
    let ctx = this.createContext(req, res)
    let composeMiddleware = this.compose(ctx, this.middlewares)
    // 当回调函数执行后 ctx.body值就会发生变化
    // 当promise都执行完后。再去res.end()
    composeMiddleware.then(() =>  {
      let body = ctx.body
      if (typeof body === 'undefined') {
        res.end('Not Found')
      } else if (typeof body === 'string') {
        res.end(body)
      }
    })
  }

  listen () {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...arguments)
  }
}

module.exports = Koa