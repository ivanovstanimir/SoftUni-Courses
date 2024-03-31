function equalSumsEvenOddPosition(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let result = "";

    for (let curNum = num1; curNum <= num2; curNum++) {   
        let curNumToStr = curNum.toString();

        let evenSum = 0;
        let oddSum = 0;

        for (let i = 0; i < curNumToStr.length; i++) {
            let digit = Number(curNumToStr[i]);
            if (i % 2 === 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }

        if (evenSum === oddSum) {
            result += curNumToStr + " ";
        }

    }
    console.log(result);

}
equalSumsEvenOddPosition(["100000",
    "100050"]);