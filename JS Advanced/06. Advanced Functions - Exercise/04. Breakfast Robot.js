function solution() {

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function commands(text) {
        let [command, info, qty] = text.split(' ');
        qty = Number(qty);
        if (command == 'restock') {
            stock[info] += qty;
            return 'Success';

        } else if (command == 'prepare') {
            let recipe = recipes[info];

            for (let incr in recipe) {

                if (stock[incr] < qty * recipe[incr]) {

                    return `Error: not enough ${incr} in stock`;
                }
            }

            for (let incr in recipe) {

                if (stock[incr] >= qty * recipe[incr]) {
                    stock[incr] -= qty * recipe[incr];
                }
            }

            return 'Success';

        } else if (command == 'report') {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    }
}
let manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));