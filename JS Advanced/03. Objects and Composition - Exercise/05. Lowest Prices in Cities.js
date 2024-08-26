function lowestPricesInCities(arr) {
    let obj = {};
    for (let text of arr) {
        let [townName, productName, productPrice] = text.split(' | ');
        productPrice = Number(productPrice);
        if (!obj.hasOwnProperty(productName)) {
            obj[productName] = { productPrice, townName };
        } else {
            if (productPrice < obj[productName].productPrice) {
                obj[productName] = { productPrice, townName };
            }
        }
    }

    let entries = Object.entries(obj);
    for (let kvp of entries) {
        let product = kvp[0];
        let currentObj = kvp[1];
        let { productPrice, townName } = currentObj;

        console.log(`${product} -> ${productPrice} (${townName})`);
    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);