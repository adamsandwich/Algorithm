public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) {
        return false;
    }
    ListNode doubleNextNode = head.next.next;
    while (doubleNextNode != null) {
        if (doubleNextNode == head) return true;
        head = head.next;
        if (doubleNextNode.next != null) {
            doubleNextNode = doubleNextNode.next.next;
        } else {
            doubleNextNode = doubleNextNode.next;
        }
    }
    return false;
}