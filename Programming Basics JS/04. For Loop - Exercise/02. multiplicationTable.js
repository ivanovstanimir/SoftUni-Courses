function multiplicationTable(input) {
    let num2 = Number(input[0]);

    for (num1 = 1; num1 <= 10; num1++) {
        let sum = num1 * num2;
        console.log(`${num1} * ${num2} = ${sum}`);
    }

}
multiplicationTable(["5"]);