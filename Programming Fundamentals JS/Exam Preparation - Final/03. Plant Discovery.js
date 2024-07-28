function plantDiscovery(arr) {
    let count = arr.shift();
    let plantInfo = {};
    for (let index = 0; index < count; index++) {
        let info = arr.shift().split('<->');
        let plant = info.shift();
        let rarity = Number(info.shift());
        let rating = 0;
        let count = 0;
        plantInfo[plant] = { rarity, rating, count };
    }

    let command = arr.shift();
    while (command !== 'Exhibition') {
        let arrCommand = command.split(': ');
        let instruction = arrCommand.shift();
        arrCommand = arrCommand.join();
        arrCommand = arrCommand.split(' - ');
        if (plantInfo.hasOwnProperty(arrCommand[0])) {
            if (instruction === 'Rate') {
                let currentPlant = arrCommand.shift();
                let currentRating = Number(arrCommand.shift());
                plantInfo[currentPlant].rating += currentRating;
                plantInfo[currentPlant].count++;

            } else if (instruction === 'Update') {
                let currentPlant = arrCommand.shift();
                let newRarity = Number(arrCommand.shift());
                plantInfo[currentPlant].rarity = newRarity;

            } else if (instruction === 'Reset') {
                let = currentPlant = arrCommand.shift();
                plantInfo[currentPlant].rating = 0;
                plantInfo[currentPlant].count = 0;
            }

        } else {
            console.log('error');
        }

        command = arr.shift();
    }

    console.log('Plants for the exhibition:');
    let entries = Object.entries(plantInfo);
    for (const [name, kvp] of entries) {
        let a = kvp.rating;
        let b = kvp.count;
        let averageRating = 0;
        if (a === 0 && b === 0) {
            averageRating = 0;
            console.log(`- ${name}; Rarity: ${kvp.rarity}; Rating: ${averageRating.toFixed(2)}`);
        } else {
            averageRating = a / b;
            console.log(`- ${name}; Rarity: ${kvp.rarity}; Rating: ${averageRating.toFixed(2)}`);
        }
    }
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
