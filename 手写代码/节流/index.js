//在规定的时间内只触发一次

function throttle(fn,delay){
  let prev = Date.now()-delay
  console.log(prev);
  return function(){
    let now = Date.now()
    let arg =arguments
    let context = this
    if(now-prev>=delay){
      fn.apply(context,arg)
      
    }
    prev = now
  }
}