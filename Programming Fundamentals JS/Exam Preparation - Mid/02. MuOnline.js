function muOnline(str) {
    let arr = str.split('|');
    let health = 100;
    let bitcoins = 0;
    let room = 0;

    for (let index = 0; index < arr.length; index++) {
        let el = arr[index];
        let [command, value] = el.split(' ');
        value = Number(value);
        room++;
        if (command === 'potion') {
            let amount = 0;
            if (health + value > 100) {
                amount = 100 - health;
                health = 100;
            } else {
                health += value;
                amount = value;
            }
            console.log(`You healed for ${amount} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === 'chest') {
            console.log(`You found ${value} bitcoins.`);
            bitcoins += value;

        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");