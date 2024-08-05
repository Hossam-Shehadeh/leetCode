class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const maxFreq = nums.length;
    const bucket = Array.from({ length: maxFreq + 1 }, () => null);

    for (const [num, freq] of frequencyMap.entries()) {
        const newNode = new ListNode(num);
        if (!bucket[freq]) {
            bucket[freq] = newNode;
        } else {
            newNode.next = bucket[freq];
            bucket[freq] = newNode;
        }
    }

    const result = [];
    for (let i = maxFreq; i >= 0 && result.length < k; i--) {
        let current = bucket[i];
        while (current && result.length < k) {
            result.push(current.val);
            current = current.next;
        }
    }

    return result;
};
