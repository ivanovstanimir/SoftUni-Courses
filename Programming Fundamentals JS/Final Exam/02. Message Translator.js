function messageTranslator(input) {
    const n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        const message = input[i];
        const regex = /!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]$/;

        const match = message.match(regex);

        if (match) {
            const command = match[1];
            const toTranslate = match[2];
            const translated = toTranslate.split('').map(char => char.charCodeAt(0)).join(' ');
            console.log(`${command}: ${translated}`);
        } else {
            console.log("The message is invalid");
        }
    }
}

let input1 = ["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"];

let input2 = ["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"];

messageTranslator(input1);

