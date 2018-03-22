public String reverseWords(String s) {
    String result = "";
    char[] chars = s.toCharArray();
    for (int i = 0, start = 0; i < chars.length; i++) {
        if (Character.isWhitespace(chars[i])) {
            result += reverseString(chars, start, i)+" ";
            start = i + 1;
        }
        if (i == chars.length - 1) {
            result += reverseString(chars, start, chars.length);
        }
    }
    return result;
}

public String reverseString(char[] chars, int start, int end) {
    char temp;
    for (int i = 0; i + start < (start + end) / 2; i++) {
        temp = chars[i + start];
        chars[i + start] = chars[end - i - 1];
        chars[end - i - 1] = temp;
    }
    return String.valueOf(Arrays.copyOfRange(chars, start, end));
}