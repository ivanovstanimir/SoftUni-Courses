function theHuntingGames(input) {
    let arr = input.map(Number);
    let adventureDays = arr.shift();
    let players = arr.shift();
    let groupsEnergy = arr.shift();
    let water = arr.shift();
    let food = arr.shift();
    let totalWater = water * players * adventureDays;
    let totalFood = food * players * adventureDays;

    for (let index = 1; index <= adventureDays; index++) {
        let energyLost = arr[index - 1];
        groupsEnergy -= energyLost;
        if (groupsEnergy <= 0) {
            break;
        }
        if (index % 2 === 0) {
            totalWater *= 0.7;
            groupsEnergy *= 1.05;
        }
        if (index % 3 === 0) {
            let lossFood = totalFood / players;
            totalFood -= lossFood;
            groupsEnergy *= 1.10;
        }
    }

    if (groupsEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }

}
theHuntingGames(["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"]);