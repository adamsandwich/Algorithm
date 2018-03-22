public int[][] matrixReshape(int[][] nums, int r, int c) {
    if (r * c != nums.length * nums[0].length) {
        return nums;
    }
    int[][] result = new int[r][c];
    int[] temp = new int[r * c];
    int count = 0;
    for (int i = 0; i < nums.length; i++) {
        for (int j = 0; j < nums[i].length; j++) {
            temp[count++] = nums[i][j];
        }
    }
    count = 0;
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            result[i][j] = temp[count++];
        }
    }
    return result;
}
//先将二维数组放进一维数组，再转换为二维数组