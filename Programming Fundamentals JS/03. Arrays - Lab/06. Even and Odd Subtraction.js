function evenAndOddSubtraction(nums) {
let sumEven = 0;
let sumOdd = 0;

for (let numStr of nums) {
    let num = Number(numStr);
    if (num % 2 == 0) {
        sumEven += num;

    } else {
        sumOdd += num;
    }
}

let diff = sumEven - sumOdd;

console.log(diff);

}
evenAndOddSubtraction([3,5,7,9]);