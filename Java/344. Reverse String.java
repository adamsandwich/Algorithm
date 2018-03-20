public String reverseString(String s) {
    char[] chars = s.toCharArray();
    char temp;
    for (int i = 0; i < chars.length / 2; i++) {
        temp = chars[i];
        chars[i] = chars[chars.length - i - 1];
        chars[chars.length - i - 1] = temp;
    }
    return String.valueOf(chars);
}
//java中object的toString()返回的字符串 = getClass().getName() + '@' + Integer.toHexString(hashCode())