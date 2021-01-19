//给定一个一个排序链表，删除重复节点
//1->1->2   2

//dummy

const deleteDuplicates = function(head) {
  //
  if(!head || !head.next) return head
  //dummy
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  //cur后面必须有两个节点
  while(cur.next && cur.next.next){
    //对两个节点比较
    if(cur.next.val === cur.next.next.val){
      //计入重复的值
      let val = cur.next.val
      while(cur.next && cur.next.val === val){
        //删除
        cur.next = cur.next.next
      }
    }else{
      cur = cur.next
    }
  }
  return dummy.next
}