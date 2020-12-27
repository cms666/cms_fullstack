let obj = {}
Object.defineProperty(obj, 'num',{
  // value:1,
  // writable: false,
  enumerable: true,
  configurable: false,
  get:undefined,
  set:function(val){

  }
})
obj.num = 3
console.log(obj);