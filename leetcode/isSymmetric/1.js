// 给定一个二叉树，检查它是否是镜像对称的。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return newSym(root, root);
};
var newSym = function (p, q) {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  return p.val == q.val && newSym(p.left, q.right) && newSym(p.right, q.left);
};
