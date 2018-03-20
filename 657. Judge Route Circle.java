 public boolean judgeCircle(String moves) {
    int x = 0, y = 0;
    for (char temp : moves.toCharArray()) {
        if (temp == 'U') {
            y++;
        } else if (temp == 'D') {
            y--;
        } else if (temp == 'L') {
            x++;
        } else if (temp == 'R') {
            x--;
        }
    }
    if (x == 0 & y == 0) {
        return true;
    } else {
        return false;
    }
}