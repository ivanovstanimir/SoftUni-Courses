function aMinerTask(arr) {
    let obj = {};

    for (let index = 0; index < arr.length; index += 2) {
        let resource = arr[index];
        let qty = Number(arr[index + 1]);

        if (resource in obj) {
            obj[resource] += qty;

        } else {
            obj[resource] = qty;
        }
    }

    let entries = Object.entries(obj);

    for (let [resource, qty] of entries) {
        console.log(`${resource} -> ${qty}`);
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);