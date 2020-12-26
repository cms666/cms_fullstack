
class Myclass {
  @annotation
  @unenumerble
  methods(){

  }
}

function annotation(target, name, descriptor){
  descriptor.writable = false
  return descriptor
}

function unenumerble(target, name, descriptor){
  descriptor.writable = false
  return descriptor
}