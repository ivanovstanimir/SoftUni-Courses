function bitcoinMining(input) {
    let days = 0;
    let goldSum = 0;
    let price = 0;
    let bitcoins = 0;
    let firstDay = 0;

    for (let index = 0; index < input.length; index++) {
        let goldPerDay = Number(input[index]);
        days++;
        goldSum = 0;
        if (days % 3 != 0) {
            goldSum += goldPerDay;

        } else if (days % 3 == 0) {
            goldSum += goldPerDay * 0.7;
        }
        price += goldSum * 67.51;

        if (price >= 11949.16) {
            if (bitcoins == 0) {
                firstDay = days;
                while (price >= 11949.16) {
                    price -= 11949.16;
                    bitcoins++;
                }

            } else if (bitcoins >= 1) {
                while (price >= 11949.16) {
                    price -= 11949.16;
                    bitcoins++;
                }
            }
        }

    }

    console.log(`Bought bitcoins: ${bitcoins}`);

    if (bitcoins >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }

    console.log(`Left money: ${price.toFixed(2)} lv.`);

}
bitcoinMining(["100", "200", "300"]);