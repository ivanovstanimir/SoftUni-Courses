function train(arr) {
    let wagons = arr.shift().split(" ").map(Number);
    let capacity = arr.shift().split().map(Number);

    for (let index of arr) {
        let command = index.split(" ");
        if (command[0] === "Add") {
            wagons.push(Number(command[1]));

        } else {
            let passengers = Number(command[0]);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengers <= capacity) {
                    wagons[i] += passengers;
                    break;
                }
            }

        }
    }

    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);