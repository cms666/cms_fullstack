let arr = [1,2,3]
//1->2->3
let node1 = {
  val:1,
  next:null
}
let node2 = {
  val:2,
  next:null
}
let node3 = {
  val:3,
  next:null
}
node1.next=node2
node2.next=node3
let current = node1
while(current){
  console.log(current);
  current=current.next
}