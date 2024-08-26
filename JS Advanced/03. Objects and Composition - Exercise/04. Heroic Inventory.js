function heroicInventory(arr) {
    let res = []
    arr.map((x) => {
        let [name, level, items] = x.split(' / ')
        res.push({ name, level: Number(level), items: items ? items.split(', ') : [] })
    })
    console.log(JSON.stringify(res))
}

let result = heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

console.log(result);

//for Judge:

// function heroicInventory(input) {

//     let result = [];
//     for (let tokens of input) {
//         let [name, level, items] = tokens.split(' / ');
//         if (!name) continue;
//         level = Number(level);
//         items = items ? items.split(", ") : []
//         result.push({ name, level, items });
//     }
//     console.log(JSON.stringify(result));
// }
// heroicInventory(['Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']);