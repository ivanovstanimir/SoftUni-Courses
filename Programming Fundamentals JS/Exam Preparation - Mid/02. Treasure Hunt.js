function treasureHunt(arr) {
    let initialTreasureChest = arr.shift().split('|');
    let sum = 0;
    let itemsCount = 0;
    let index = 0;
    let text = arr[index];
    while (text !== 'Yohoho!') {
        let commandArr = text.split(' ');
        let command = commandArr.shift();
        if (command === 'Loot') {
            let items = commandArr;
            for (const item of items) {
                if (!initialTreasureChest.includes(item)) {
                    initialTreasureChest.unshift(item);
                }
            }
        } else if (command === 'Drop') {
            let dropIndex = commandArr.shift();
            dropIndex = Number(dropIndex);
            if (initialTreasureChest[dropIndex]) {
                let drop = initialTreasureChest.splice(dropIndex, 1).join(); // или (dropIndex, 1)[0] тъй като splice връща масив, а по този начин се взема първия индекс от масива
                initialTreasureChest.push(drop);
            }
        } else if (command === 'Steal') {
            let count = commandArr.shift();
            count = Number(count);
            let stealItems = '';
            if (count <= initialTreasureChest.length) {
                stealItems = initialTreasureChest.splice((initialTreasureChest.length - count), count); //или splice(-count)

            } else {
                stealItems = initialTreasureChest.splice(0, initialTreasureChest.length); //или splice(0)
            }

            console.log(stealItems.join(', '));
        }

        index++;
        text = arr[index];
    }

    if (initialTreasureChest.length === 0) {
        console.log('Failed treasure hunt.');
        return;
    } else {
        for (let i = 0; i < initialTreasureChest.length; i++) {
            let element = initialTreasureChest[i];
            itemsCount++;
            let count = 0;
            for (let j = 0; j < element.length; j++) {
                count++;
            }
            sum += count;
        }
    }
    let averageGain = sum / itemsCount;
    console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);