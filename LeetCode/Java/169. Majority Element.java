public int majorityElement(int[] nums) {
    HashMap<Integer, Integer> hashMap = new HashMap<Integer, Integer>();
    int result = 0;
    for (Integer num : nums) {
        if (hashMap.containsKey(num)) {
            hashMap.put(num, hashMap.get(num) + 1);
        } else {
            hashMap.put(num, 1);
        }
    }
    Set<Map.Entry<Integer, Integer>> sets = hashMap.entrySet();
    for (Map.Entry<Integer, Integer> set : sets) {
        if (set.getValue() > nums.length / 2) {
            result = set.getKey();
        }
    }
    return result;
}