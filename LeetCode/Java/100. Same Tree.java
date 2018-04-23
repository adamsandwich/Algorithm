public boolean isSameTree(TreeNode p, TreeNode q) {
    if (p == null && q == null) {
        return true;
    } else if ((p == null && q != null) || (q == null && p != null)) {
        return false;
    } else if (p.val != q.val) {
        return false;
    } else if (!isSameTree(p.left, q.left)) {
        return false;
    } else if (!isSameTree(p.right, q.right)) {
        return false;
    } else {
        return true;
    }
}