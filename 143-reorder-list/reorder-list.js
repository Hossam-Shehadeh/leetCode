var reorderList = function(head) {
    if (!head || !head.next || !head.next.next) return;

    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = slow.next;
    slow.next = null; 
    let prev = null;

    while (second) {
        let next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }

    let first = head;
    second = prev;

    while (second) {
        let temp1 = first.next;
        let temp2 = second.next;
        
        first.next = second;
        second.next = temp1;
        
        first = temp1;
        second = temp2;
    }
};