//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * DFS
 * @param {TreeNode} root 
 * @param {number[]} leaves 
 */
var DFS = function (root, leaves) {
    if (!root.left && !root.right) {
        leaves.push(root.val);
    }
    if (root.left) {
        DFS(root.left, leaves);
    }
    if (root.right) {
        DFS(root.right, leaves);
    }
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let root1Leaves = [],
        root2Leaves = [];
    DFS(root1, root1Leaves);
    DFS(root2, root2Leaves);
    return JSON.stringify(root1Leaves) == JSON.stringify(root2Leaves);
};