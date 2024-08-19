class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); 
    this.head = new ListNode(0, 0);
    this.tail = new ListNode(0, 0); 
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        let node = this.cache.get(key);
        this._remove(node);
        this._add(node);
        return node.value;
    }
    return -1; 
};

LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this._remove(this.cache.get(key));
    }
    let node = new ListNode(key, value);
    this._add(node);
    this.cache.set(key, node);
    if (this.cache.size > this.capacity) {
        let lru = this.head.next;
        this._remove(lru);
        this.cache.delete(lru.key);
    }
};

LRUCache.prototype._add = function(node) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
};

LRUCache.prototype._remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};
