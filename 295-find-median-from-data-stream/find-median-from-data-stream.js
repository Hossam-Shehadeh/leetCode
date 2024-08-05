var MedianFinder = function() {
    this.low = new MaxHeap(); 
    this.high = new MinHeap(); 
};


MedianFinder.prototype.addNum = function(num) {
    if (this.low.size() === 0 || num <= this.low.peek()) {
        this.low.add(num);
    } else {
        this.high.add(num);
    }

    if (this.low.size() > this.high.size() + 1) {
        this.high.add(this.low.remove());
    } else if (this.high.size() > this.low.size()) {
        this.low.add(this.high.remove());
    }
};

MedianFinder.prototype.findMedian = function() {
    if (this.low.size() > this.high.size()) {
        return this.low.peek();
    } else {
        return (this.low.peek() + this.high.peek()) / 2;
    }
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    add(val) {
        this.heap.push(val);
        this._heapifyUp(this.heap.length - 1);
    }
    remove() {
        if (this.heap.length === 0) return null;
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._heapifyDown(0);
        }
        return root;
    }
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
    _heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            this._heapifyUp(parentIndex);
        }
    }
    _heapifyDown(index) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let largest = index;

        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
            largest = leftChild;
        }
        if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild;
        }
        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this._heapifyDown(largest);
        }
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    add(val) {
        this.heap.push(val);
        this._heapifyUp(this.heap.length - 1);
    }
    remove() {
        if (this.heap.length === 0) return null;
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._heapifyDown(0);
        }
        return root;
    }
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
    _heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            this._heapifyUp(parentIndex);
        }
    }
    _heapifyDown(index) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let smallest = index;

        if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }
        if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this._heapifyDown(smallest);
        }
    }
}
