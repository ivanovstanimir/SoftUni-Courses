function wordTracker(arr) {
    let searchedWords = arr.shift();
    let words = searchedWords.split(" ");
    let obj = {};

    for (let word of words) {
       obj[word] = 0;
    }

    for(let curWord of arr) {
        if (curWord in obj) {
            obj[curWord]++;
        }
    }

    let entries = Object.entries(obj).sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);
    
    for(let [key, value] of entries) {
        console.log(`${key} - ${value}`);
    }
}
wordTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);