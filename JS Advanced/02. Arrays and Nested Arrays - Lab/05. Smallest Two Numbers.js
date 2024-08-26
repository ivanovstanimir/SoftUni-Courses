function smallestTwoNumbers(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let firstNum = sortedArr.shift();
    let secondNum = sortedArr.shift();

    console.log(firstNum, secondNum);
}
smallestTwoNumbers([30, 15, 50, 5]);