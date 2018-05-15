public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    if (l1 == null) {
        return l2;
    } else if (l2 == null) {
        return l1;
    }
    if (l1.val > l2.val) {
        ListNode temp = l1;
        l1 = l2;
        l2 = temp;
    }
    ListNode n1 = l1.next, n2 = l2, curr = l1;
    while (n1 != null && n2 != null) {
        if (n1.val > n2.val) {
            curr.next = n2;
            curr = curr.next;
            n2 = n2.next;
        } else {
            curr.next = n1;
            curr = curr.next;
            n1 = n1.next;
        }
    }
    if (n1 != null && n2 == null) {
        curr.next = n1;
    } else if (n1 == null && n2 != null) {
        curr.next = n2;
    }
    return l1;
}