function sumOfNumbersN_M(str1, str2) {
    let num1 = Number(str1);
    let num2 = Number(str2);
    let sum = 0;
    for (let index = num1; index <= num2; index++) {
        sum += index;
    }

    console.log(sum);
}
sumOfNumbersN_M('-8', '20');