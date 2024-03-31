function newHouse(input) {
    let type = input[0];
    let flowersQty = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;

    switch (type) {
        case "Roses": sum = flowersQty * 5; break;
        case "Dahlias": sum = flowersQty * 3.80; break;
        case "Tulips": sum = flowersQty * 2.80; break;
        case "Narcissus": sum = flowersQty * 3; break;
        case "Gladiolus": sum = flowersQty * 2.50; break;
    }

    if (type === "Roses" && flowersQty > 80) {
        sum *= 0.9;

    } else if (type === "Dahlias" && flowersQty > 90) {
        sum *= 0.85;

    } else if (type === "Tulips" && flowersQty > 80) {
        sum *= 0.85;

    } else if (type === "Narcissus" && flowersQty < 120) {
        sum *= 1.15;

    } else if (type === "Gladiolus" && flowersQty < 80) {
        sum *= 1.2;
    }


    if (budget >= sum) {
        let moneyLeft = budget - sum;
        console.log(`Hey, you have a great garden with ${flowersQty} ${type} and ${moneyLeft.toFixed(2)} leva left.`);

    } else {
        let moneyNeeded = sum - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }


}
newHouse(["Tulips", "88", "260"]);
