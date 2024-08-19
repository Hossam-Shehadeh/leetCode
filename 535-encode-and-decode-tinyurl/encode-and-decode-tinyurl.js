const urlMap = new Map();
let counter = 0;
const BASE_URL = "http://tinyurl.com/";

var encode = function(longUrl) {
    const shortUrl = BASE_URL + (counter++).toString(36);
    urlMap.set(shortUrl, longUrl);
    return shortUrl;
};

var decode = function(shortUrl) {
    return urlMap.get(shortUrl);
};
