// 删除排序链表中的重复元素
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let newhead = head;
  while (newhead && newhead.next) {
    if (newhead.val == newhead.next.val) {
      newhead.next = newhead.next.next;
    } else {
      newhead = newhead.next;
    }
  }
  return head;
};
