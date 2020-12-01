let b = {
  name: '壹号'
}
function a(e,r) {
  this.sex='boy'
  console.log(e + r);
  console.log(this.name);
}


Function.prototype.mybind = function (thisArg) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  //让this代表的这个函数去到 thisArg 里面生效
  const fn = Symbol("fn"); //防止fn这个单词被占用
  //把this代表的这个函数所拥有的参数先取到
  const args = [...arguments].slice(1);
  const self = this
  thisArg = thisArg || window;
  const nop = function(){}
  //绑定函数
  const bound = function(){
    return self.apply(this instanceof nop ? this: thisArg,args)  //this.sex = 'boy'
  }
  if(this.prototype){
    nop.prototype = this.prototype
  }
  bound.prototype=new nop()
 
  return bound
  //将调用call函数的方法添加到thisArg的属性中
/*   thisArg[fn] = this;
  const result = thisArg[fn](...args);
  delete thisArg[fn];
  return result; */
};

a.mybind(b,1,2)()