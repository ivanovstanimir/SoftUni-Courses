function replaceRepeatingChars(str) {
    let result = '';

    for (let index in str) {
        if (index === 0) {
            result += str[index];

        } else {
            if (str[index] !== str[index - 1]) {
                result += str[index];
            }
        }
    }
    
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');