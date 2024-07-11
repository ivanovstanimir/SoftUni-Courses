function catalogue(arr) {
    let obj = {};
    for (let text of arr) {
        let tokens = text.split(' : ');
        let productName = tokens[0];
        let productPrice = Number(tokens[1]);
        obj[productName] = productPrice;
    }

    let sortedKey = Object.keys(obj);
    sortedKey.sort((a, b) => a.localeCompare(b));
    let sortedObj = {};

    for (let name of sortedKey) {
        sortedObj[name] = obj[name];
    }
    let entries = Object.entries(sortedObj);
    let name = '';
    for (kvp of entries) {
        let key = kvp[0];
        let value = kvp[1];
        let letter = key[0];
        if (letter !== name[0]) {
            console.log(letter);
            console.log(`  ${key}: ${value}`);
        } else {
            console.log(`  ${key}: ${value}`);
        }
        name = key;
    }
}

let input = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ];
    
    catalogue(input);