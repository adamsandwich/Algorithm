public int findMaxConsecutiveOnes(int[] nums) {
    int count = 0, maxCount = 0;
    for (int i : nums) {
        if (i == 1) {
            count++;
        } else {
            if (maxCount < count) {
                maxCount = count;
            }
            count = 0;
        }
    }
    return maxCount > count ? maxCount : count;
}