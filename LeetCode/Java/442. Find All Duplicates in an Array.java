public List<Integer> findDuplicates(int[] nums) {
    List<Integer> res = new ArrayList<>();
    int[] counter = new int[nums.length + 1];
    for (Integer num : nums) {
        counter[num]++;
    }
    for (int i = 0; i < counter.length; i++) {
        if (counter[i] == 2) {
            res.add(i);
        }
    }
    return res;
}//O(2n) with extra space
