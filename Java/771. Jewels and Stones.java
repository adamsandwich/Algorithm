public int numJewelsInStones(String J, String S) {
    char c[] = J.toCharArray();
    int lenS = S.length();
    int lenJ = J.length();
    int count = 0;
    for (int i = 0; i < lenS; i++) {
        for (int j = 0; j < lenJ; j++) {
            if (c[j]==S.charAt(i)){
                count++;
            }
        }
    }
    return count;
}