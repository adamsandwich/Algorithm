public boolean rotateString(String A, String B) {
    if(A.length()!= B.length()){
        return false;
    }
    String AA = A + A;
    if (AA.contains(B)) {
        return true;
    }
    return false;
}