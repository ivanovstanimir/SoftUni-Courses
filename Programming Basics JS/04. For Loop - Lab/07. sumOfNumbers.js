function sumOfNumbers(input) {
    let numString = input[0];

    let sum = 0;

    for (let index = 0; index < numString.length; index++) {
        let singleNum = Number(numString[index]);
        sum += singleNum;

    }
    console.log(`The sum of the digits is:${sum}`);

}
sumOfNumbers(["564891"]);