public boolean isOneBitCharacter(int[] bits) {
    if (bits[bits.length - 1] != 0) {
        return false;
    }
    int i = 0;
    for (; i < bits.length - 1; ) {
        i += bits[i] + 1;
    }
    return i == bits.length - 1;
}