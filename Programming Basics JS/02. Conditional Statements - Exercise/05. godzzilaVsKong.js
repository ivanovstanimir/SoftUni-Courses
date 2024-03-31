function godzillaVsKong(input) {
    let filmBudget = Number(input[0]);
    let actor = Number(input[1]);
    let priceCostumePerActor = Number(input[2]);

    let decorPrice = 0.10* filmBudget;

    let totalCostumePrice = actor * priceCostumePerActor;

    if (actor > 150) {
        totalCostumePrice = totalCostumePrice * 0.90;
    }

    let totalPrice = decorPrice + totalCostumePrice;

    if (totalPrice > filmBudget) {
        console.log("Not enough money!");
        let moneyNeeded = totalPrice - filmBudget;
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else if(totalPrice <= filmBudget) {
        console.log("Action!");
        let moneyLeft = filmBudget - totalPrice;
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

    }
    
}
godzillaVsKong(["20000", "120", "55.5"]);

