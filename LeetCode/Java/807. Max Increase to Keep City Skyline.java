public int maxIncreaseKeepingSkyline(int[][] grid) {
    int res = 0;
    int[] up_down = new int[grid[0].length];
    int[] left_right = new int[grid.length];
    //获取上下、左右最高点
    for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[0].length; j++) {
            if (left_right[i] < grid[i][j]) {
                left_right[i] = grid[i][j];
            }
            if (up_down[j] < grid[i][j]) {
                up_down[j] = grid[i][j];
            }
        }
    }
    for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[0].length; j++) {
            res += Math.min(up_down[j], left_right[i]) - grid[i][j];
        }
    }
    return res;
}