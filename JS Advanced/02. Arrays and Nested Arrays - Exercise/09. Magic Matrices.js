function magicMatrices(arr) {
    let isTrue = true;
    let sum = arr[0].reduce((a, b) => a + b);
    for (let index = 1; index < arr.length; index++) {
        let currentArr = arr[index];
        let currentSum = currentArr.reduce((a, b) => a + b);
        if (sum !== currentSum) {
            isTrue = false;
            return isTrue;
        }
    }

    for (let index = 0; index < arr[0].length; index++) {
        let currentSum = 0;
        for (let j = 0; j < arr.length; j++) {

            currentSum += arr[j][index];
        }
        if (sum !== currentSum) {
            isTrue = false;
            return isTrue;
        }
    }

    return isTrue;
}
let result = magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

console.log(result);
