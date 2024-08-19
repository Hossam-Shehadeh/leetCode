class AuthenticationManager {
    constructor(timeToLive) {
        this.timeToLive = timeToLive;
        this.tokens = new Map();
    }

    generate(tokenId, currentTime) {
        this.tokens.set(tokenId, currentTime + this.timeToLive);
    }
    renew(tokenId, currentTime) {
        if (this.tokens.has(tokenId)) {
            const expiryTime = this.tokens.get(tokenId);
            if (expiryTime > currentTime) {
                this.tokens.set(tokenId, currentTime + this.timeToLive);
            }
        }
    }

    countUnexpiredTokens(currentTime) {
        let count = 0;
        for (const expiryTime of this.tokens.values()) {
            if (expiryTime > currentTime) {
                count++;
            }
        }
        return count;
    }
}
