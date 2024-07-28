function heroesOfCodeAndLogicVII(arr) {
    let heroesCount = Number(arr.shift());
    let heroesObj = {};
    for (let index = 0; index < heroesCount; index++) {
        let currentHero = arr.shift().split(' ');
        let heroName = currentHero.shift();
        let hp = Number(currentHero.shift());
        let mp = Number(currentHero.shift());
        heroesObj[heroName] = { hp, mp };
    }

    let command = arr.shift();
    while (command !== 'End') {
        let text = command.split(' - ');
        let instruction = text.shift();
        if (instruction === 'CastSpell') {
            let heroName = text.shift();
            let neededMp = Number(text.shift());
            let spellName = text.shift();
            let mp = heroesObj[heroName].mp;
            if (mp >= neededMp) {
                mp -= neededMp;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
            heroesObj[heroName].mp = mp;

        } else if (instruction === 'TakeDamage') {
            let heroName = text.shift();
            let damage = Number(text.shift());
            let attacker = text.shift();
            let hp = heroesObj[heroName].hp;
            if (hp - damage > 0) {
                hp -= damage;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${hp} HP left!`);
                heroesObj[heroName].hp = hp;
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroesObj[heroName];
            }


        } else if (instruction === 'Recharge') {
            let heroName = text.shift();
            let amount = Number(text.shift());
            let mp = heroesObj[heroName].mp;
            if (mp + amount > 200) {
                amount = 200 - mp;
                mp = 200
            } else {
                mp += amount
            }
            console.log(`${heroName} recharged for ${amount} MP!`);
            heroesObj[heroName].mp = mp;

        } else if (instruction === 'Heal') {
            let heroName = text.shift();
            let amount = Number(text.shift());
            let hp = heroesObj[heroName].hp;
            if (hp + amount > 100) {
                amount = 100 - hp;
                hp = 100;
            } else {
                hp += amount;
            }
            console.log(`${heroName} healed for ${amount} HP!`);
            heroesObj[heroName].hp = hp;
        }

        command = arr.shift();
    }

    let entries = Object.entries(heroesObj);
    for (const [name, value] of entries) {
        console.log(name);
        let {hp, mp } = value;
        console.log(`  HP: ${hp}`);
        console.log(`  MP: ${mp}`);
    }
}

let input1 = ["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"];

let input2 = ["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"];

heroesOfCodeAndLogicVII(input2);