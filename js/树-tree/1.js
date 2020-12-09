var preorderTraversal = function (root) {
  let arr = [];
  function walk(root) {
    if (!root) return;
    arr.push(root.val);
    walk(root.left);
    walk(root.right);
  }
  walk(root);
  return arr;
};
