function carWash(array) {
    let totalPercent = 0;

    for (let command of array) {
        switch (command) {
            case 'soap': totalPercent += 10; break;
            case 'water': totalPercent *= 1.20; break;
            case 'vacuum cleaner': totalPercent *= 1.25; break;
            case 'mud': totalPercent *= 0.90; break;
        }
    }

    console.log(`The car is ${totalPercent.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);