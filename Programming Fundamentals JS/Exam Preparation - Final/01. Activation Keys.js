function activationKeys(arr) {
    let activationKey = arr.shift();
    let command = arr.shift();
    while (command !== 'Generate') {
        let text = command.split('>>>');
        let instruction = text.shift();
        if (instruction === 'Contains') {
            let substring = text.shift();
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (instruction === 'Flip') {
            let currentCommand = text.shift();
            let startIndex = Number(text.shift());
            let endIndex = Number(text.shift());
            if (currentCommand === 'Upper') {
                let changed = activationKey.substring(startIndex, endIndex);
                changedToUpper = changed.toUpperCase(startIndex, endIndex);
                activationKey = activationKey.replace(changed, changedToUpper);
                console.log(activationKey);
            } else if (currentCommand === 'Lower') {
                let changed = activationKey.substring(startIndex, endIndex);
                changedToLower = changed.toLowerCase();
                activationKey = activationKey.replace(changed, changedToLower);
                console.log(activationKey);
            }
        } else if (instruction === 'Slice') {
            let startIndex = Number(text.shift());
            let endIndex = Number(text.shift());
            let removed = activationKey.substring(startIndex, endIndex);
            activationKey = activationKey.replace(removed, '');
            console.log(activationKey);
        }

        command = arr.shift();
    }

    console.log(`Your activation key is: ${activationKey}`);
}

let input1 = (["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);

let input2 = (["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);

activationKeys(input1);

