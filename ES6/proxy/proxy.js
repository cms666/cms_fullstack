/* let proxy = new Proxy({}, {
  get:function(obj, prop){
    console.log('get');
    return obj[prop]
  },
  set:function(obj, prop, value){
    console.log('set');
    obj[prop] = value
  }
})
proxy.time = 35
console.log(proxy.time); */


/* let handle = {
  has(target, key){
    if(key[0]==='_'){
      return false
    }
    return key in target
  }
}
let target = {
  _prop:'foo',
  prop:'har'
}
let proxy = new Proxy(target, handle)
console.log('_proxy' in proxy); */

/* let target = function(){ return 'target'}
handler = {
  apply: function(){
    return 'proxy'
  }
}
let p = new Proxy(target,handler)
console.log(p()); */

let target = {
  _bar:'foo',
  _prop:'bar',
  prop:'baz'
}
let handler = {
  ownKeys(target){
    return Reflect.ownKeys(target).filter(key => key[0] !== '_')
  }
}
let p = new Proxy(target,handler)
console.log(p);
for(let key of Object.keys(p)){
  console.log(target[key]);
}