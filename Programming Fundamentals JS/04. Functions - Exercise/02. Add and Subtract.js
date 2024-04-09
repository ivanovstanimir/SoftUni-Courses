function  addAndSubtract(num1, num2, num3) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    
    let result1 = sum(num1, num2);
    let finalResult = subtract(result1, num3);
    console.log(finalResult);
}
addAndSubtract(23, 6, 10);
