/* function foo(){
  console.log(this.a);
}
var bar ={
  a:2
}
foo.call(bar) */

/* var a ={
  user:'蜗牛',
  fn:function(q,w){
    console.log(this.user);
    console.log(q+w);
  }
}
var b = a.fn
b.call(a,2,3) */

//传参形式不一样
/* var a ={
  user:'蜗牛',
  fn:function(q,w){
    console.log(this.user);
    console.log(q+w);
  }
}
var b =a.fn
b.apply(a,[3,4]) */

//返回函数
var a ={
  user:'蜗牛',
  fn:function(q,w){
    console.log(this.user);
    console.log(q+w);
  }
}
var b =a.fn
var c = b.bind(a,4,5)
c(4,6)  //9  相当于就近原则