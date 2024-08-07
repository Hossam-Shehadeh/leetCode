class Twitter {
    constructor() {
        this.tweets = new Map();
        this.followers = new Map();
        this.timestamp = 0;
    }

    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId).push({ id: tweetId, timestamp: this.timestamp++ });
    }

    getNewsFeed(userId) {
        const tweets = [];
        const followedUsers = new Set([userId]);

        if (this.followers.has(userId)) {
            this.followers.get(userId).forEach(followeeId => followedUsers.add(followeeId));
        }

        followedUsers.forEach(user => {
            if (this.tweets.has(user)) {
                tweets.push(...this.tweets.get(user));
            }
        });

        return tweets
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, 10)
            .map(tweet => tweet.id);
    }

    follow(followerId, followeeId) {
        if (followerId === followeeId) return;

        if (!this.followers.has(followerId)) {
            this.followers.set(followerId, new Set());
        }
        this.followers.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (followerId === followeeId) return;

        if (this.followers.has(followerId)) {
            this.followers.get(followerId).delete(followeeId);
        }
    }
}