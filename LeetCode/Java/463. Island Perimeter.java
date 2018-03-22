public int islandPerimeter(int[][] grid) {
    int height = grid.length, width = grid[0].length, result = 0;
    //判→↓
    for (int i = 0; i < height; i++) {
        for (int j = 0; j < width; j++) {
            if (grid[i][j] == 1) {
                result += 4;
                if (j + 1 < width && grid[i][j + 1] == 1) {
                    result -= 2;
                }
                if (i + 1 < height && grid[i + 1][j] == 1) {
                    result -= 2;
                }
            }
        }
    }
    return result;
}