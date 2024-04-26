function storeProvision(currentStock, orderedProduct) {
    let products = [];

    for (let index = 0; index < currentStock.length; index += 2) {
        let productName = currentStock[index];
        let count = Number(currentStock[index + 1]);
        let object = {
            name: productName,
            qty: count
        };
        products.push(object);
    }

    for (let index = 0; index < orderedProduct.length; index += 2) {
        let productName = orderedProduct[index];
        let count = Number(orderedProduct[index + 1]);

        let foundProduct = products.find(p => p.name == productName);
        if (foundProduct) {
            foundProduct.qty += count;

        } else {
            let object = {
                name: productName,
                qty: count
            };
            products.push(object);
        }
    }

    for (let current of products) {
        console.log(`${current.name} -> ${current.qty}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);