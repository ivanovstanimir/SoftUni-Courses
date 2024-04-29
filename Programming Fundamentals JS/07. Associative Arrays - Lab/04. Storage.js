function storage(arr) {
    let map = new Map();
    for (let el of arr) {
        let [product, qty] = el.split(" ");
        qty = Number(qty);

        if (map.has(product)) {
            qty += map.get(product);
        }

        map.set(product, qty);
    }
    for (let [key, value] of map) {
        console.log(`${key} -> ${value}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
