function preorder(root){
  if(!root) return

  console.log('当前节点值：',root.val);
  preorder(root.left)
  preorder(root.right)
}