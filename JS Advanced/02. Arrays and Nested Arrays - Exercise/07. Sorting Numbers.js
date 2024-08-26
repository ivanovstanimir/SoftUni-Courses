function sortingNumbers(arr) {
    arr.sort((a, b) => a - b);
    let newArr = [];
    while (arr.length > 0) {
        let first = arr.shift();
        let final = arr.pop();
        newArr.push(first);
        newArr.push(final);
    }

    return newArr;
}
let result = sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

console.log(newArr);
