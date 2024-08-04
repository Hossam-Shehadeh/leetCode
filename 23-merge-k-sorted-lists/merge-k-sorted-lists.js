var mergeKLists = function(lists) {
    const nodes = [];


    for (let list of lists) {
        while (list !== null) {
            nodes.push(list);
            list = list.next;
        }
    }

    nodes.sort((a, b) => a.val - b.val);

    let dummy = new ListNode();
    let current = dummy;
    for (let node of nodes) {
        current.next = node;
        current = current.next;
    }

    if (current !== null) {
        current.next = null;
    }

    return dummy.next;
};