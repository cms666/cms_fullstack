const ceo = {
  name:'cms',
  age:20,

}

function Coder(name, age){
  this.name = name

}

function Factory(name, age , career){
  switch(career){
    case 'coder':
      return new Coder(name,age)
  }
}