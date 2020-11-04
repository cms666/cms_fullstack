Car.prototype.name = 'BWM'
Car.prototype.lang = 4900;
Car.prototype.height = 1400;
function Car(color, owner) {
  this.color = color;
  this.owner = owner;
/*   this.name = "BWM";
  this.lang = 4900;
  this.height = 1400; */
}
var car = new Car('red','cms');
