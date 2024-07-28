function pirates(arr) {
    let text = arr.shift();
    let obj = {};
    let count = 0;
    while (text !== 'Sail') {
        let command = text.split('||');
        let city = command.shift();
        let population = Number(command.shift());
        let gold = Number(command.shift());
        if (!obj.hasOwnProperty(city)) {
            obj[city] = { population, gold };
        } else {
            obj[city].population += population;
            obj[city].gold += gold;
        }

        text = arr.shift();
    }

    let event = arr.shift();
    while (event !== 'End') {
        let instructions = event.split('=>');
        let action = instructions.shift();
        if (action === 'Plunder') {
            let town = instructions.shift();
            let people = Number(instructions.shift());
            let gold = Number(instructions.shift());
            let currentPeople = obj[town].population;
            let currentGold = obj[town].gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (currentPeople - people <= 0 || currentGold - gold <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete obj[town];
            } else {
                currentPeople -= people;
                currentGold -= gold;
                obj[town].population = currentPeople;
                obj[town].gold = currentGold;
            }
        } else if (action === 'Prosper') {
            let town = instructions.shift();
            let gold = Number(instructions.shift());
            let currentGold = obj[town].gold;
            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                currentGold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${currentGold} gold.`);
                obj[town].gold = currentGold;
            }
        }

        event = arr.shift();
    }

    for (let el in obj) {
        count++;
    }

    let entries = Object.entries(obj);
    if (count > 0) {
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
        for (const [city, currentObj] of entries) {
            let { population, gold } = currentObj;
            console.log(`${city} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

let input1 = (["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);

let input2 = (["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);

pirates(input1);