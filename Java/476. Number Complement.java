public int findComplement(int num) {
    return ~num + (Integer.highestOneBit(num) << 1);
}
//以补码形式运算