interface QueueObj{
  [propName:number]:any
}
export default class Queue{
  //javascript 高级写法
  private count:number
  private lowestCount:number
  private items:QueueObj
  constructor(){
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  enqueue(item:any){
    this.items[this.count]=item
    this.count++
  }
  size(){
    return this.count-this.lowestCount
  }
  clear(){
    this.count=0
    this.items={}
    this.lowestCount = 0
  }
  dequeue(){
    // 先进先出
    if(this.isEmpty()){
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  //返回对头
  peek(){
    if(this.isEmpty()){
      return undefined
    }
    return this.items[this.lowestCount]
  }
  toString(){
    if(this.isEmpty()){
      return ""
    }
    let objString = `${this.items[this.lowestCount]}`
    for(let i=1+this.lowestCount;i<this.count;i++){
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
  isEmpty(){
    return this.count-this.lowestCount===0
  }
}