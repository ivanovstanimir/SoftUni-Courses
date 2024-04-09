function repeatString(string, repeatCount) {
    let result = '';

    for (let index = 1; index <= repeatCount; index++) {
        result += string;
    }

    return result;
}
repeatString('abc', 3);