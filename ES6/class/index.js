class Foo{
  // constructor(){}
  static bar(){
    this.baz()
  }
  // static baz(){
  //   console.log('world');
  // }
  baz(){
    console.log('world');
  }
}
Foo.baz()  //? 错
/* class Shape{
  constructor(width,height){
    this._width = width
    this._height = height
  }
  get area(){   ///get
    console.log(123);
  }
}
const square = new Shape(10,10)
console.log(square.area);
 */