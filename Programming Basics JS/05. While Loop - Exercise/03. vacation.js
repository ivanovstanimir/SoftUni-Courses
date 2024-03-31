function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let moneyAvailable = Number(input[1]);

    let index = 2;
    let command = input[index];
    index++;

    let money = Number(input[index]);
    index++;

    let totalDays = 0;
    let consecutiveDaysSpend = 0;

    while (moneyAvailable < moneyNeeded) {
        totalDays++;
        if (command === "save") {
            consecutiveDaysSpend = 0;
            moneyAvailable += money;

        } else if (command === "spend") {
            consecutiveDaysSpend++;
            moneyAvailable -= money;

            if (moneyAvailable < 0) {
                moneyAvailable = 0;
            }
        }
        
        if (consecutiveDaysSpend === 5) {
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


