function app() {}
app.middlewares = []
app.use = function(callback) {
  app.middlewares.push(callback)
}

app.use((ctx, next) => { // 1
  console.log(1);
  next()
  console.log(2);
})
app.use((ctx, next) => { // 2
  console.log(3);

})
app.use((ctx, next) => { // 3
  console.log(5);
  next()
  console.log(6);
})

function dispath(index) {
  // 先取出第一个中间件，让其执行，将索引递增，调用next就是将下一个中间件继续执行
  if (index === app.middlewares.length) return
  let middleware = app.middlewares[index]
  middleware({}, () => dispath(index + 1))
}
dispath(0)