let Koa = require('koa')
let app = new Koa()

app.use((ctx, next) => { // 1
  console.log(1);
  next()
  console.log(2);
})
app.use((ctx, next) => { // 2
  console.log(3);
  next()
  console.log(4);
})
app.use((ctx, next) => { // 3
  console.log(5);
  next()
  console.log(6);
})

app.listen(3001)