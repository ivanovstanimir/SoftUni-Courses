function wordsUppercase(str) {
    let strLength = str.length;
    let arr = [];

    for (let index = 0; index < strLength; index++) {
        let currentChar = str[index];
        let currentIndex = str.charCodeAt(index);
        if (currentIndex >= 65 && currentIndex <= 90 || currentIndex === 95 || currentIndex >= 97 && currentIndex <= 122 || currentIndex >= 48 && currentIndex <= 57) {
            arr.push(currentChar);

        } else {
            arr.push(' ');
        }
    }
    let pattern = /\s+/g;
    let string = arr.join('').trim();
    let result = string.split(pattern).join(', ').toUpperCase();
    console.log(result);
}
wordsUppercase('  Hi, how are you?    ');