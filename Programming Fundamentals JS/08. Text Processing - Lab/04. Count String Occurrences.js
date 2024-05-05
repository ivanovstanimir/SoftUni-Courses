function countStringOccurrences(text, word) {
    let arr = text.split(' ');
    let count = 0;

    for (let index = 0; index < arr.length; index++) {
        let curElement = arr[index];
        if (curElement == word) {
            count++;
        }
    }
    console.log(count);
}
countStringOccurrences('This is a word and it is also a sentence',
    'is');