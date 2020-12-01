let b = {
  name: '壹号'
}
function a(e,r) {
  console.log(e + r);
  console.log(this.name);
}

/* Function.prototype.myapply = function (thisArg) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  //让this代表的这个函数去到 thisArg 里面生效
  const fn = Symbol("fn"); //防止fn这个单词被占用
  //把this代表的这个函数所拥有的参数先取到
  const args = [...arguments][1];
  thisArg = thisArg || window;

  //将调用call函数的方法添加到thisArg的属性中
  thisArg[fn] = this;
  const result = thisArg[fn](...args);
  delete thisArg[fn];
  return result;
}; */
Function.prototype.myapply = function (obj,arg) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  //让this代表的这个函数去到 thisArg 里面生效
  const fn = Symbol("fn"); //防止fn这个单词被占用
  //把this代表的这个函数所拥有的参数先取到
  obj = obj || window;

  //将调用call函数的方法添加到thisArg的属性中
  obj[fn] = this;
  const result = obj[fn](...arg);
  delete obj[fn];
  return result;
};
a.myapply(b,[1,2])
