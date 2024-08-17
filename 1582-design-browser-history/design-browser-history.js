class BrowserHistory {
    constructor(homepage) {
        this.history = [homepage]; 
        this.currentIndex = 0;      
    }

    visit(url) {
        this.history = this.history.slice(0, this.currentIndex + 1);
        this.history.push(url);
        this.currentIndex++;
    }

    back(steps) {
        this.currentIndex = Math.max(0, this.currentIndex - steps);
        return this.history[this.currentIndex];
    }

    forward(steps) {
        this.currentIndex = Math.min(this.history.length - 1, this.currentIndex + steps);
        return this.history[this.currentIndex];
    }
}


