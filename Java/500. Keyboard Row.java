private static String[] row = {"", "qwertyuiop", "asdfghjkl", "zxcvbnm"};

public String[] findWords(String[] words) {
    List<String> result = new ArrayList<>();
    for (String word : words) {
        int currentRow = 0;
        boolean flag = true;
        if (row[1].contains(Character.toLowerCase(word.charAt(0)) + "")) {
            currentRow = 1;
        }
        if (row[2].contains(Character.toLowerCase(word.charAt(0)) + "")) {
            currentRow = 2;
        }
        if (row[3].contains(Character.toLowerCase(word.charAt(0)) + "")) {
            currentRow = 3;
        }
        for (Character ch : word.toLowerCase().toCharArray()) {
            if (currentRow == 1 && !row[1].contains(ch + "")) {
                flag = false;
                break;
            }
            if (currentRow == 2 && !row[2].contains(ch + "")) {
                flag = false;
                break;
            }
            if (currentRow == 3 && !row[3].contains(ch + "")) {
                flag = false;
                break;
            }
        }
        if (flag) {
            result.add(word);
        }
    }
    return result.toArray(new String[result.size()]);
}