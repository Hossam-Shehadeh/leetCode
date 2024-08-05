class MedianFinder {
    constructor() {
        this.small = [];  
        this.large = []; 
    }

    addNum(num) {
       
        if (this.small.length === 0 || num <= this.small[this.small.length - 1]) {
            this._binaryInsert(this.small, num);
        } else {
            this._binaryInsert(this.large, num);
        }

        if (this.small.length > this.large.length + 1) {
            this.large.unshift(this.small.pop());
        } else if (this.large.length > this.small.length) {
            this.small.push(this.large.shift());
        }
    }

    findMedian() {
        if (this.small.length === this.large.length) {
            return (this.small[this.small.length - 1] + this.large[0]) / 2;
        } else {
            return this.small[this.small.length - 1];
        }
    }

   
    _binaryInsert(arr, num) {
        let left = 0;
        let right = arr.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        arr.splice(left, 0, num);
    }
}