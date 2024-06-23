function computerStore(arr) {
    let command = arr.pop();
    let sum = 0;
    let totalPrice = 0;
    for (let el of arr) {
        let price = Number(el);
        if (price >= 0) {
            sum += price;
        } else {
            console.log('Invalid price!');
        }
    }
    let taxes = sum * 0.2;
    if (command === 'special') {
        totalPrice = (sum + taxes) * 0.9;
    } else if (command === 'regular') {
        totalPrice = sum + taxes;
    }

    if (totalPrice === 0) {
        console.log('Invalid order!');
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }


} 
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);