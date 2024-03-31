function sumDigits(num) {
    let numToString = String(num);
    let sum = 0;

    for (let index = 0; index < numToString.length; index++) {
        sum += Number(numToString[index]);
    }

    console.log(sum);

}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);