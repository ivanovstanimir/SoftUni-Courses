function softUniBarIncome(arr) {
    let pattern = /[^\|\$%\.]*%(?<name>[A-Z][a-z]+)%[^\|\$%\.]*<(?<product>[A-Za-z]+)>[^\|\$%\.]*\|(?<qty>\d+)\|[^\|\$%\.\d]*(?<price>\d+\.?\d*)\$[^\|\$%\.]*/

    let income = 0;
    let command = arr.shift();
    while (command !== 'end of shift') {
        let match = command.match(pattern);
        if (match) {
            let { name, product, qty, price } = match.groups;
            let totalPrice = Number(qty) * Number(price);
            income += totalPrice;
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }

        command = arr.shift();
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);

    console.log('----------------');


softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);