// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let step1 = head,
        step2 = head;
    while (step2.next != null) {
        step1 = step1.next;
        step2 = step2.next;
        if (step2.next != null) {
            step2 = step2.next;
        }else{
            break;
        }
    }
    return step1;
};