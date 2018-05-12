public ListNode reverseList(ListNode head) {
    ListNode curr = head;
    ListNode prev = null;
    while (curr != null) {
        ListNode node = curr.next;
        curr.next = prev;
        prev = curr;
        curr = node;
    }
    return prev;
}