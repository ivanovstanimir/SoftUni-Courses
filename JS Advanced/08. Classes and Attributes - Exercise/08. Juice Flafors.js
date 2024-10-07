function juiceFlavors(input) {
    let obj = {};
    let bottles = {};

    function createBottle(flovor) {
        if (obj[flovor] >= 1000) {
            if (!bottles.hasOwnProperty(flovor)) {
                bottles[flovor] = 0;
            }

            let numberOfBottles = Math.floor(obj[flovor] / 1000);
            bottles[flovor] += numberOfBottles;
            obj[flovor] -= numberOfBottles * 1000;
        }
    }

    for (let line of input) {
        let [flavor, qty] = line.split(' => ');
        qty = Number(qty);
        if (!obj.hasOwnProperty(flavor)) {
            obj[flavor] = 0;
        }

        obj[flavor] += qty;
        createBottle(flavor)
    }

    for (const key in bottles) {
        let value = bottles[key];
        console.log(`${key} => ${value}`);
    }
}
let input1 = ['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'];

let input2 = ['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'];

juiceFlavors(input1);         // Orange => 2
// Peach => 2


juiceFlavors(input2);         // Pear => 8
// Watermelon => 10
// Kiwi => 4
