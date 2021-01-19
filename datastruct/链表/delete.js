//链表的删除

//给定一个排序的链表，删除重复元素

function ListNode(val){
  this.val = val
  this.next = null
}

const deleteDuplicates = function (head){
  //设定cur指针，
  let cur = head
  //遍历链表
  while(cur !==null && cur.next !== null){
    if(cur.val === cur.next.val){
      cur.next = cur.next.next
    }else{
      cur = cur.next
    }
  }
  return head
}