public int uniqueMorseRepresentations(String[] words) {
    String[] morse = {".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--",
            "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."};
    HashMap<String, Integer> res = new HashMap();
    for (String word : words) {
        String temp = "";
        for (char ch : word.toCharArray()) {
            temp += morse[ch - 'a'];
        }
        res.put(temp, 1);
    }
    return res.size();
}