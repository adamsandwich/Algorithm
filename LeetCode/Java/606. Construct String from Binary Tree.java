public String tree2str(TreeNode t) {
    String res = "";
    if (t == null) {
        return res;
    }
    res += String.valueOf(t.val);
    if (t.left != null && t.right == null) {
        res += "(" + tree2str(t.left) + ")";
    } else if (t.left == null && t.right != null) {
        res += "()";
        res += "(" + tree2str(t.right) + ")";
    } else if (t.left != null && t.right != null) {
        res += "(" + tree2str(t.left) + ")";
        res += "(" + tree2str(t.right) + ")";
    }
    return res;
}

public String tree2str(TreeNode t) {
    StringBuilder res = new StringBuilder();
    if (t == null) {
        return res.toString();
    }
    res.append(String.valueOf(t.val));
    if (t.left != null && t.right == null) {
        res.append('(');
        res.append(tree2str(t.left));
        res.append(')');
    } else if (t.left == null && t.right != null) {
        res.append("()");
        res.append('(');
        res.append(tree2str(t.right));
        res.append(')');
    } else if (t.left != null && t.right != null) {
        res.append('(');
        res.append(tree2str(t.left));
        res.append(')');
        res.append('(');
        res.append(tree2str(t.right));
        res.append(')');
    }
    return res.toString();
}