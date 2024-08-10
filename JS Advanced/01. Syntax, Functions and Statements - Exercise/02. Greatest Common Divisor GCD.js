function greatestCommonDivisorGCD(param1, param2) {
    let num1 = Number(param1);
    let num2 = Number(param2);

    while (num1 !== num2) {
        if (num1 > num2) {
            num1 -= num2;

        } else {
            num2 -= num1;
        }
    }

    console.log(num1);

}
greatestCommonDivisorGCD(15, 5);