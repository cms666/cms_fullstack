let p = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve()
  }, 3000);
})
async function fun(){
  await p
  return true
}
fun().then((r)=>{
  console.log(r);
})