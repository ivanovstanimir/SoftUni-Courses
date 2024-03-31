function accountBalance(input) {

    let sum = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "NoMoreMoney") {
        let money = Number(command);
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${money.toFixed(2)}`);
        sum += money;

        command = input[index];
        index++;


    }

    console.log(`Total: ${sum.toFixed(2)}`);
}
accountBalance(["120",
    "45.55",
    "-150"]);