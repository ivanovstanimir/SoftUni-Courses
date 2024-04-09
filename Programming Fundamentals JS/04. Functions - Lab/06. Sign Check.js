function signCheck(numOne, numTwo, numThree) {
    let numArr = [numOne, numTwo, numThree];
    let product = 1;

    for (let index = 0; index < numArr.length; index++) {
        product *= numArr[index];
    }

    if (product < 0) {
        console.log("Negative");

    } else {
        console.log("Positive");
    }
}
signCheck(5, 12, -15);