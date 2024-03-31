function gladiatorExpenses(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmet = 0;
    let sword = 0;
    let shield = 0;
    let armor = 0;

    for (let index = 2; index <= lostFightCount; index += 2) {
        helmet += helmetPrice;

    }

    for (let index = 3; index <= lostFightCount; index += 3) {
        sword += swordPrice;

    }

    for (let index = 6; index <= lostFightCount; index += 6) {
        shield += shieldPrice;

    }

    for (let index = 12; index <= lostFightCount; index += 12) {
        armor += armorPrice;

    }

    let sum = helmet + sword + shield + armor;

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);

}
gladiatorExpenses(7, 2, 3, 4, 5);