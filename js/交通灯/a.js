// const fs = require("fs");
// fs.readFile("./index.html", "utf8", (err, file) => {
//   console.log(file);
// });

// 包装一层promise
let p =(url)=> new Promise((resolve, reject) => {
  const fs = require("fs");
  fs.readFile("url", "utf8", (err, file) => {
    // resolve(file)
    // reject(err)
    if(err){
      reject()
    }else{
      resolve(file)
    }
  });
});
// p.then(res=>{
//   console.log(res);
// })
p('./index.html').then((res)=>{
  console.log(res);
  return p('./a.js')
}).then((res1)=>{
  console.log(res1);
})