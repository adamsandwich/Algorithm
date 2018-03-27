public int maxDepth(TreeNode root) {
    if (root == null) {
        return 0;
    }
    return DFS(root, 1);
}

public int DFS(TreeNode root, Integer depth) {
    int left = depth, right = depth;
    if (root.left != null) {
        left = DFS(root.left, depth + 1);
    }
    if (root.right != null) {
        right = DFS(root.right, depth + 1);
    }
    return Math.max(right, left);
}