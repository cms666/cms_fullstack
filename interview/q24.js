function f(){
  var a = f.prototype  
  var b = Object.getPrototypeOf(f) //Funtion.prototype
}

a === b  //false