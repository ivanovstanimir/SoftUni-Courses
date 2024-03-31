function braceletStand(input) {
    let pocketOnesPerDay = Number(input[0]);
    let moneyPerDay = Number(input[1]);
    let totalPeriodExpense = Number(input[2]);
    let giftPrice = Number(input[3]);

    let totalPocketOnes = pocketOnesPerDay * 5;
    let money = moneyPerDay * 5;
    let totalSavedMoney = totalPocketOnes + money;
    let savedMoney = totalSavedMoney - totalPeriodExpense;

    if (savedMoney >= giftPrice) {
        console.log(`Profit: ${savedMoney.toFixed(2)} BGN, the gift has been purchased.`);

    } else {
        let moneyNeeded = giftPrice - savedMoney;
        console.log(`Insufficient money: ${moneyNeeded.toFixed(2)} BGN.`);
    }

}
braceletStand(["5.12",
    "32.05",
    "15",
    "150"]);