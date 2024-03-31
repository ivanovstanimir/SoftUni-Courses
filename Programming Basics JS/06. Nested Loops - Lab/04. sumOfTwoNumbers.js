function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNum = Number(input[2]);

    let sum = 0;
    let combination = 0;
    
    for (let x = startNumber; x <= endNumber; x++) {
        for (let y = startNumber; y <= endNumber; y++) {
            sum = x + y;
            combination++;
            if (sum === magicNum) {
                console.log(`Combination N:${combination} (${x} + ${y} = ${magicNum})`);
                return;
            }
        }
    }

    if (sum !== magicNum) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }

}

sumOfTwoNumbers(["88",
"888",
"1000"]);