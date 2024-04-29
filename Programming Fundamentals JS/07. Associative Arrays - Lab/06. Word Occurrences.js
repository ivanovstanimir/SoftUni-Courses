function wordOccurrences(arr) {
    let obj = {};

    for (let word of arr) {
        if (!obj[word]) {
            obj[word] = 0;
        }
        obj[word]++;
    }

    let objEntries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of objEntries) {
        console.log(`${key} -> ${value} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first",
    "sentence", "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"]);