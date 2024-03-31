function primeNumberChecker(num) {
    let isPrime = true;

    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
    }

    console.log(`${isPrime ? "true" : "false"}`);

}
primeNumberChecker(7);