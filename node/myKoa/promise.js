new Promise((resolve, reject) => {
  console.log(1);
  new Promise((resolve, reject) => {
    console.log(2);
    resolve('ok')
  })
  resolve('ok')
}).then(() => {
  console.log(3);
})