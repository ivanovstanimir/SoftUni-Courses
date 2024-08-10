function sameNumbers(num) {
    let numToStr = num.toString();
    let firstNum = Number(numToStr[0]);
    let strLength = numToStr.length;
    let isTrue = true;
    let sum = 0;

    for (let index = 0; index < strLength; index++) {
        let currentNum = Number(numToStr[index]);
        sum += currentNum;
        if (firstNum !== currentNum) {
            isTrue = false;
        }
    }

    console.log(isTrue);
    console.log(sum);
}
sameNumbers(2222222);