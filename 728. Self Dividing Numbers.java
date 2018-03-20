public List<Integer> selfDividingNumbers(int left, int right) {
    List<Integer> list = new ArrayList<>();
    for (int i = left; i <= right; i++) {
        if (judge(i)) {
            list.add(i);
        }
    }
    return list;
}

public boolean judge(int num) {
    for (char temp : String.valueOf(num).toCharArray()) {
        if (temp == '0' || num % (temp - '0') > 0) {
            return false;
        }
    }
    return true;
}