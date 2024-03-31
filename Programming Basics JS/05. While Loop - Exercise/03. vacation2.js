function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let moneyAvailable = Number(input[1]);

    let index = 2;
    let command = input[index];
    index++;

    let money = Number(input[index]);
    index++;

    let totalDays = 0;
    let totalDaysSpend = 0;

    while (command !== "spend") {
        moneyAvailable += money;

        command = input[index];
        index++;
        money = Number(input[index]);
        index++;
    }

    while (command === "spend") {
        totalDays++;
        totalDaysSpend++;
        moneyAvailable -= money;
        if (moneyAvailable < 0) {
            moneyAvailable = 0;
        }
        if (totalDaysSpend === 5) {
            console.log("You can't save the money.");
            console.log(`${totalDays}`);
            break;
        }

        command = input[index];
        index++;

        money = Number(input[index]);
        index++;

    }

    if (moneyAvailable >= moneyNeeded) {
        console.log(`You saved the money for ${totalDays} days.`);

    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);