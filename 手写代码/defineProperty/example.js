function Archiver() {
  let obj = {},
    value = null,archiver=[];
  Object.defineProperty(this, "num", {
    get: function () {
      console.log("get");
      return value;
    },
    set: function (newValue) {
      console.log("set");
      value = newValue;
      archiver.push({value:newValue})
    },
  });
  this.getArchiver = function (){
    return archiver
  }
}
// obj.num = 2
// console.log(obj.num);
let arc = new Archiver()
arc.num //get
arc.num = 11 //set
console.log(arc.getArchiver());
