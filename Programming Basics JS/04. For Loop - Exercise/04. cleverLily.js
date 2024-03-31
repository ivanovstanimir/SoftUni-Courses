function cleverLily(input) {
    let age = Number(input[0]);
    let wPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let curMoney = 0;

    for (index = 1; index <= age; index++) {
        if (index % 2 === 0) {
            curMoney += 10;
            money +=curMoney - 1;

        } else {
            money += toyPrice;
        }
    }

    let difference = Math.abs(money - wPrice);

    if (money >= wPrice) {
        console.log(`Yes! ${difference.toFixed(2)}`);

    } else {
        console.log(`No! ${difference.toFixed(2)}`);
    }
}
cleverLily(["21", "1570.98", "3"]);