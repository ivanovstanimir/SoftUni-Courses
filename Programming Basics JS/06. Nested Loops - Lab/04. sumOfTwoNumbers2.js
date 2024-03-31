function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNum = Number(input[2]);

    let sum = 0;
    let combination = 0;
    let isFound = false;

    for (let x = startNumber; x <= endNumber; x++) {
        for (let y = startNumber; y <= endNumber; y++) {
            sum = x + y;
            combination++;
            if (sum === magicNum) {
                console.log(`Combination N:${combination} (${x} + ${y} = ${magicNum})`);
                isFound = true;
                break;
            }
        }

        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }

}
sumOfTwoNumbers(["1",
    "10",
    "5"]);