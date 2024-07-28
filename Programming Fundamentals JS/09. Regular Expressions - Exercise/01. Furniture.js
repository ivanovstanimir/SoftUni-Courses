function furniture(input) {
    let items = [];
    let sum = 0;
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

    let command = input.shift();

    while (command != 'Purchase') {
        let match = command.match(pattern);
        if (match) {
            let { name, price, qty } = match.groups;
            let totalPrice = Number(price) * Number(qty);

            sum += totalPrice;
            items.push(name);
        }
        command = input.shift();
    }

    console.log('Bought furniture:');

    if (items.length > 0) {
        console.log(items.join('\n'));
    }

    console.log(`Total money spend: ${sum.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);