function theImitationGame(arr) {
    let encryptedMsg = arr.shift();
    let command = arr.shift();
    while (command !== 'Decode') {
        let text = command.split('|');
        let instruction = text.shift();
        if (instruction === 'Move') {
            let numberOfLetters = Number(text);
            encryptedMsg = encryptedMsg.split('');
            let removed = encryptedMsg.splice(0, numberOfLetters);
            encryptedMsg = encryptedMsg.concat(removed).join('');

        } else if (instruction === 'Insert') {
            let index = Number(text.shift());
            let value = text.shift();
            encryptedMsg = encryptedMsg.split('');
            encryptedMsg.splice(index, 0, value);
            encryptedMsg = encryptedMsg.join('')

        } else if (instruction === 'ChangeAll') {
            let substring = text.shift();
            let replecement = text.shift();
            while (encryptedMsg.includes(substring)) {
                encryptedMsg = encryptedMsg.replace(substring, replecement);
            }
        }

        command = arr.shift();
    }

    console.log(`The decrypted message is: ${encryptedMsg}`);

}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode']);