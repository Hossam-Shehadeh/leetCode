var topKFrequent = function(nums, k) {

    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const maxFreq = nums.length;
    const bucket = Array.from({ length: maxFreq + 1 }, () => []);

    for (const [num, freq] of frequencyMap.entries()) {
        bucket[freq].push(num);
    }

    const result = [];
    for (let i = maxFreq; i >= 0 && result.length < k; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);
        }
    }

    return result.slice(0, k);
};