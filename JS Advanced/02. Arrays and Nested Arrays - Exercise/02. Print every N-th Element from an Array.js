function printEveryN_thElementFromAnArray(arr, step) {
    let result = [];
    for (let index = 0; index < arr.length; index += step) {
        let currenthar = arr[index];
        result.push(currenthar);
    }

    return result
}
let newArr = printEveryN_thElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2);

console.log(newArr);
