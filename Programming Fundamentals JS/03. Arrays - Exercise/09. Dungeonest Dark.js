function dungeonestDark(arr) {
    let commands = arr.join().split('|');
    let health = 100;
    let coins = 0;
    let rooms = 0;

    for (let command of commands) {
        rooms++;
        let [text, value] = command.split(' ');
        if (text === 'potion') {
            let healthAdded = Number(value);
            if (health + healthAdded > 100) {
                healthAdded = 100 - health;
            }
            health += healthAdded;
            console.log(`You healed for ${healthAdded} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (text === 'chest') {
            coins += Number(value);
            console.log(`You found ${value} coins.`);
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${text}.`);
            } else {
                console.log(`You died! Killed by ${text}.`);
                console.log(`Best room: ${rooms}`);
                break;
            }
        }
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);