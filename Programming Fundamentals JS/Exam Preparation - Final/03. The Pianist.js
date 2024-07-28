function thePianist(arr) {
    let piecesNum = Number(arr.shift());
    let list = {};
    for (let index = 0; index < piecesNum; index++) {
        let [piece, composer, key] = arr.shift().split('|');
        list[piece] = { composer, key };
    }

    let command = arr.shift();

    while (command !== 'Stop') {
        let text = command.split('|');
        let instruction = text.shift();
        if (instruction === 'Add') {
            let currentPiece = text.shift();
            let composer = text.shift();
            let key = text.shift();
            if (list.hasOwnProperty(currentPiece)) {
                console.log(`${currentPiece} is already in the collection!`);
            } else {
                list[currentPiece] = { composer, key };
                console.log(`${currentPiece} by ${composer} in ${key} added to the collection!`);
            }

        } else if (instruction === 'Remove') {
            let currentPiece = text.shift();
            if (list.hasOwnProperty(currentPiece)) {
                delete list[currentPiece];
                console.log(`Successfully removed ${currentPiece}!`);
            } else {
                console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
            }

        } else if (instruction === 'ChangeKey') {
            let currentPiece = text.shift();
            let newKey = text.shift();
            if (list.hasOwnProperty(currentPiece)) {
                list[currentPiece].key = newKey;
                console.log(`Changed the key of ${currentPiece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
            }
        }

        command = arr.shift();
    }

    let entries = Object.entries(list);
    for (const [piece, info] of entries) {
        console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
    }
}
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop']);