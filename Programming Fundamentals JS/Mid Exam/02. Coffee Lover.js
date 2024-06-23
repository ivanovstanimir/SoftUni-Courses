function coffeeLover(input) {
    let coffees = input.shift().split(' ');
    let commandCounts = Number(input.shift());

    for (let index = 0; index < commandCounts; index++) {
        let text = input[index].split(' ');
        let command = text[0];
        if (command === 'Include') {
            let coffee = text[1];
            coffees.push(coffee);

        } else if (command === 'Remove') {
            if (coffees.length >= Number(text[2])) {
                if (text[1] === 'first') {
                    let removedNumbers = Number(text[2]);
                    coffees.splice(0, removedNumbers);

                } else if (text[1] === 'last') {
                    let removedNumbers = Number(text[2]);
                    coffees.splice(-removedNumbers);

                }
            }

        } else if (command === 'Prefer') {
            let coffeeInx1 = Number(text[1]);
            let coffeeInx2 = Number(text[2]);
            if (coffees[coffeeInx1] && coffees[coffeeInx2]) {
                let coffeeFirst = coffees[coffeeInx1];
                coffees[coffeeInx1] = coffees[coffeeInx2];
                coffees[coffeeInx2] = coffeeFirst;
            }

        } else if (command === 'Reverse') {
            coffees.reverse();
        }
    }

    console.log('Coffees:');
    console.log(coffees.join(' '));
}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"]);    
