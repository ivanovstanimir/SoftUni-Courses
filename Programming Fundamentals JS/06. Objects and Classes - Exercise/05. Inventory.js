function inventory(arr) {
    let heroes = [];

    arr.forEach(element => {
        let [hero, level, items] = element.split(" / ");
        level = Number(level);
        let object = {
            hero,
            level,
            items
        };
        heroes.push(object);console.log(object);
    })

    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

    for (currentObject of sortedHeroes) {
        console.log(`Hero: ${currentObject.hero}`);
        console.log(`level => ${currentObject.level}`);
        console.log(`items => ${currentObject.items}`);
    }
}
inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);