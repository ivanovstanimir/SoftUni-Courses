function emojiDetector(arr) {
    let str = arr.shift();
    let coolThresholdPattern = /\d/g;
    let emojiPattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})(\1)/g;
    let matchEmoji = str.match(emojiPattern);
    let matchTreshold = str.match(coolThresholdPattern).map(Number);
    let product = 1;
    let count = 0;
    for (let number of matchTreshold) {
        product *= number;
    }

    console.log(`Cool threshold: ${product}`);

    for (let match of matchEmoji) {
        count++;
    }

    console.log(`${count} emojis found in the text. The cool ones are:`);
    let matchEmoji2 = str.matchAll(emojiPattern);

    for (let match of matchEmoji2) {
        let emoji = match.groups.emoji;
        let sum = 0;
        for (let index = 0; index < emoji.length; index++) {
            let currenrChar = emoji[index];
            let ascii = currenrChar.charCodeAt();
            sum += ascii;
        }
        if (sum >= product) {
            console.log(match[0]);
        }
    }
}

let input1 = (["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

let input2 = (["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);

emojiDetector(input2);