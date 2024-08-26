function sumFirstLast(arr) {
    let numsArr = arr.map(Number);
    let firstNum = numsArr.shift();
    let lastNum = numsArr.pop();
    let sum = firstNum + lastNum;
    return sum;
}
let result = sumFirstLast(['20', '30', '40']);
console.log(result);
