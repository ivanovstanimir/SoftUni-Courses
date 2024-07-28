function passwordReset(arr) {
    let str = arr.shift();
    let command = arr.shift();

    while (command !== 'Done') {
        let text = command.split(' ');
        let instruction = text.shift();
        if (instruction === 'TakeOdd') {
            let result = '';
            for (let index = 0; index < str.length; index++) {
                if (index % 2 !== 0) {
                    result += str[index];
                }
            }
            str = result;
            console.log(str);

        } else if (instruction === 'Cut') {
            let index = Number(text.shift());
            let length = Number(text.shift());
            let cutted = str.substring(index, index + length);
            str = str.replace(cutted, '');
            console.log(str);

        } else if (instruction === 'Substitute') {
            let substring = text.shift();
            let substitute = text.shift();
            if (str.includes(substring)) {
                let replaced = str.split(substring).join(substitute);
                str = replaced;
                console.log(str);
            } else {
                console.log('Nothing to replace!');
            }
        }

        command = arr.shift();
    }

    console.log(`Your password is: ${str}`);
}
let input1 = (["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])

let input2 = (["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])

passwordReset(input1);