"use strict"
interface StackMin {
  [propName: number]: number
}
class MinStack {
  private items: StackMin;
  private count: number;
  constructor() {
    this.items = {}
    this.count = 0
  }

  push(item: number) {
    this.items[this.count] = item
    this.count++
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--;
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  top() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  getMin() {
    if (this.isEmpty()) {
      return undefined
    }
    let min = this.items[0]
    for (let i = 1; i < this.count; i++) {
      if (min > this.items[i]) {
        min = this.items[i]
      }
    }
    return min
  }
  isEmpty() {
    return this.count === 0
  }
}
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
minStack.top();
console.log(minStack.getMin());

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/