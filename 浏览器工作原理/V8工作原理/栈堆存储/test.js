let jack = {
  name: 'jack.ma',
  age: 40,
  like: {
    dog: {
      color: 'black',
      age: 3
    },
    cat: {
      color: 'white',
      age: 2
    }
  }
}

function copy(src) {
  let dest = src instanceof Array ? [] : {};
  // 实现拷贝代码，将src的值完整的拷贝给dest
  // dest = JSON.stringify(src)
  // return JSON.parse(dest)
  for(let key in src){
    if(typeof src[key] == 'object'){
      dest[key] = copy(src[key])
    }else{
      dest[key] = src[key]
    }
  }
  return dest
}

let jack2 = copy(jack)
jack2.like.dog.color = 'green'
console.log(jack.like.dog.color); // black