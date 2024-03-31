function sumPrimeNonPrime(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;

    let index = 0;
    let command = input[index];
    index++

    while (command !== "stop") {
        let curNum = Number(command);
        let isPrime = true;

        if (command < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++
            continue;
        }
        for (let divisor = 2; divisor < curNum; divisor++) {

            if (curNum % divisor === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeSum += curNum;
        } else {
            nonPrimeSum += curNum;
        }

        command = input[index];
        index++
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}
sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]);