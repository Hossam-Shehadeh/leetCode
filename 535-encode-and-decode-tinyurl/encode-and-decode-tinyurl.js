// Global map to store the mapping of short URLs to long URLs
const urlMap = new Map();
let counter = 0;
const base = "http://tinyurl.com/";

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let shortPath = counter.toString(36); // Generate a unique short path
    counter++;
    let shortUrl = base + shortPath;
    urlMap.set(shortUrl, longUrl); // Store the mapping
    return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return urlMap.get(shortUrl); // Retrieve the original URL
};

// Usage Example:
// const tinyUrl = encode("https://leetcode.com/problems/design-tinyurl");
// const originalUrl = decode(tinyUrl);
