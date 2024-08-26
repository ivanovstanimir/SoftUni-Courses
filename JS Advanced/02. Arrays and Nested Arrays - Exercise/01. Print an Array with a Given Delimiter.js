function printAnArrayWithAGivenDelimiter(arr, delimeter) {
    let str = arr.join(delimeter);
    console.log(str);
}
printAnArrayWithAGivenDelimiter(
    ['One',
        'Two',
        'Three',
        'Four',
        'Five'],
    '-');