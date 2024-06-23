function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');

    for (let index = 0; index < input.length; index++) {
        const element = input[index].split(' ');
        let command = element.shift();
        let equipment = element.shift();
        if (command === 'Buy') {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }

        } else if (command === 'Trash') {
            let indexEqt = inventory.indexOf(equipment);
            if (indexEqt !== -1) {
                inventory.splice(indexEqt, 1);
            }

        } else if (command === 'Repair') {
            let indexEqt = inventory.indexOf(equipment);
            if (indexEqt !== -1) {
                inventory.splice(indexEqt, 1);
                inventory.push(equipment);
            }

        } else if (command === 'Upgrade') {
            let eqtArr = equipment.split('-');
            let equipmentName = eqtArr.shift();
            let equipmentUpgrade = eqtArr.shift();
            let indexEqt = inventory.indexOf(equipmentName);
            if (indexEqt !== -1) {
                inventory.splice(indexEqt + 1, 0, `${equipmentName}:${equipmentUpgrade}`);
            }
        }
    }

    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);