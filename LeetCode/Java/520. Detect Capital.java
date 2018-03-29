public boolean detectCapitalUse(String word) {
    if (word.length() == 1) {
        return true;
    }
    int type = 0;//0全小写 1全大写 2首字母大写
    if (Character.isLowerCase(word.charAt(0))) {
        type = 0;
    } else if (Character.isUpperCase(word.charAt(1))) {
        type = 1;
    } else {
        type = 2;
    }
    for (int i = 1; i < word.length(); i++) {
        Character ch = word.charAt(i);
        if (type == 0 || type == 2) {
            if (Character.isUpperCase(ch)) {
                return false;
            }
        }
        if (type == 1) {
            if (Character.isLowerCase(ch)) {
                return false;
            }
        }
    }
    return true;
}