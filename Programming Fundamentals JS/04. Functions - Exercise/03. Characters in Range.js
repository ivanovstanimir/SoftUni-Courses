function charactersInRange(char1, char2) {
    let code1 = char1.charCodeAt();
    let code2 = char2.charCodeAt();

    let minCode = Math.min(code1, code2);
    let maxCode = Math.max(code1, code2);
    let result = '';

    for (let index = minCode + 1; index < maxCode; index++) {
        let currentCode = String.fromCharCode(index);
        result += currentCode + ' '
    }

    console.log(result);

}
charactersInRange('a', 'd');