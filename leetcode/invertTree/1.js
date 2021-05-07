//翻转二叉树
var invertTree = function(root) {
  if(!root) return
  [root.left,root.right]=[root.right,root.left]
  invertTree(root.left)
  invertTree(root.right)
};