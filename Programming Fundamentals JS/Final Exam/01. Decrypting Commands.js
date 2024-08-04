function decryptingCommands(arr) {
    let str = arr.shift();
    let command = arr.shift();
    while (command !== 'Finish') {
        let text = command.split(" ");
        let instruction = text.shift();
        if (instruction === 'Replace') {
            let currentChar = text.shift();
            let newChar = text.shift();
            str = str.split(currentChar).join(newChar);
            console.log(str);

        } else if (instruction === 'Cut') {
            let startIndex = Number(text.shift());
            let endIndex = Number(text.shift());
            if (startIndex >= 0 && startIndex <= str.length &&
                endIndex >= 0 && endIndex <= str.length) {
                let cutted = str.substring(startIndex, (endIndex + 1));
                let newStr = str.replace(cutted, '');
                str = newStr;
                console.log(str);
            } else {
                console.log('Invalid indices!');
            }

        } else if (instruction === 'Make') {
            let upperOrLower = text.shift();
            if (upperOrLower === 'Upper') {
                str = str.toUpperCase();
            } else if (upperOrLower === 'Lower') {
                str = str.toLowerCase();
            }
            console.log(str);

        } else if (instruction === 'Check') {
            let string = text.shift();
            if (str.includes(string)) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }

        } else if (instruction === 'Sum') {
            let startIndex = Number(text.shift());
            let endIndex = Number(text.shift());
            if (startIndex >= 0 && startIndex <= str.length &&
                endIndex >= 0 && endIndex <= str.length) {
                let cutted = str.substring(startIndex, (endIndex + 1));
                let sum = 0;
                for (let index = 0; index < cutted.length; index++) {
                    let nums = cutted.charCodeAt(index);
                    sum += nums;
                }
                console.log(sum);
            } else {
                console.log('Invalid indices!');
            }
        }

        command = arr.shift();
    }

}

let input1 = ["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"];

let input2 = ["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"];

decryptingCommands(input2);

