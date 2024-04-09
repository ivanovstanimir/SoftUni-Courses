function oddAndEvenSum(num) {
    let numAsString = String(num);

    let [oddSum, evenSum] = evenOddSum(numAsString);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function evenOddSum(string) {
        let evenSum = 0;
        let oddSum = 0;

        for (let currentChar of string) {
            let cureentDigit = Number(currentChar)
            if (cureentDigit % 2 == 0) {
                evenSum += cureentDigit;
            } else {
                oddSum += cureentDigit;
            }
        }

        return [oddSum, evenSum];
    }
}
oddAndEvenSum(1000435);