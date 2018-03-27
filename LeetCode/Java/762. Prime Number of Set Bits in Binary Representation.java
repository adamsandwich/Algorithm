public int countPrimeSetBits(int L, int R) {
    int count = 0;
    for (int i = L; i <= R; i++) {
        if (isPrimeNumber(Integer.bitCount(i))) {
            count++;
        }
    }
    return count;
}

public boolean isPrimeNumber(int num) {
    if (num == 2) return true;//2特殊处理
    if (num < 2 || num % 2 == 0) return false;//识别小于2的数和偶数
    for (int i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i == 0) {//识别被奇数整除
            return false;
        }
    }
    return true;
}