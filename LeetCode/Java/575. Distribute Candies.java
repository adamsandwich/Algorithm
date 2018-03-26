public int distributeCandies(int[] candies) {
    Set set = new HashSet();
    for (Integer candy : candies) {
        set.add(candy);
    }
    return Math.min(set.size(), candies.length / 2);
}