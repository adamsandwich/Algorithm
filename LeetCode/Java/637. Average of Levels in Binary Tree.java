public List<Double> averageOfLevels(TreeNode root) {
    List<Double> res = new ArrayList<>();
    Queue<TreeNode> queue = new LinkedList<>();
    queue.add(root);
    Double sum = 0.0;
    int num = 0;
    while (!queue.isEmpty()) {
        sum = 0.0;
        num = queue.size();
        for (int i = 0; i < num; i++) {
            TreeNode node = queue.poll();
            sum += node.val;
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        res.add(sum / num);
    }
    return res;
}