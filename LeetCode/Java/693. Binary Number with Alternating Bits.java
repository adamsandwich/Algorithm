public boolean hasAlternatingBits(int n) {
    int last, second2last;
    while (n != 0) {
        last = n & 1;
        n = n >> 1;
        second2last = n & 1;
        if (last == second2last) {
            return false;
        }
    }
    return true;
}