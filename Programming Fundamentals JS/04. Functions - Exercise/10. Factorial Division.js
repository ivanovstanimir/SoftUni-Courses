function factorialDivision(num1, num2) {
    let a = calcFactorial(num1);
    let b = calcFactorial(num2);

    let finalSum = a / b;
    console.log(finalSum.toFixed(2));

    function calcFactorial(num) {
        let sum = num;
        for (let index = num - 1; index >= 1; index--) {
            sum *= index;
        }
        return sum;
    }
}
factorialDivision(5, 2);