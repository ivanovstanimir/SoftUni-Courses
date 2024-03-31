//Пъзел - 2.60 лв.
//Говореща кукла - 3 лв.
//Плюшено мече - 4.10 лв.
//Миньон - 8.20 лв.
//Камионче - 2 лв.


function toyShop(input) {

    let tripPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let mignon = Number(input[4]);
    let truck = Number(input[5]);

    let moneyEarned = puzzle * 2.60 + talkingDoll * 3 + teddyBear * 4.10 + mignon * 8.20 + truck * 2;
    let toyCount = puzzle + talkingDoll + teddyBear + mignon + truck;


if (toyCount >= 50) {
        let discount = 0.25 * moneyEarned;
        moneyEarned = moneyEarned - discount;
    }
    let rent = moneyEarned * 0.10;
    moneyEarned = moneyEarned - rent;

    if (moneyEarned >= tripPrice) {
        let moneyLeft = moneyEarned - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let missingMoney = tripPrice - moneyEarned;
        console.log(`Not enough money! ${missingMoney.toFixed(2)} lv needed.`);
    }
    
}
toyShop(["320", "8", "2", "5", "5", "1"]);
