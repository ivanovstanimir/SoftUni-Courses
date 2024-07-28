function secretChat(arr) {
    let concealedMsg = arr.shift();
    let command = arr.shift();

    while (command !== 'Reveal') {
        let commandArr = command.split(':|:');
        let instruction = commandArr.shift();
        if (instruction === 'InsertSpace') {
            let index = Number(commandArr.shift());
            let concealedMsgArr = concealedMsg.split('');
            concealedMsgArr.splice(index, 0, ' ');
            concealedMsg = concealedMsgArr.join('');
            console.log(concealedMsg);

        } else if (instruction === 'Reverse') {
            let substring = commandArr.shift();
            let idx = concealedMsg.indexOf(substring);
            if (idx !== -1) {
                let concealedMsgArr = concealedMsg.split('');
                let cutted = concealedMsgArr.splice(idx, substring.length);
                let reverced = cutted.reverse().join('');
                concealedMsgArr.push(reverced);
                concealedMsg = concealedMsgArr.join('');
                console.log(concealedMsg);
            } else {
                console.log('error');
            }

        } else if (instruction === 'ChangeAll') {
            let substring = commandArr.shift();
            let replacement = commandArr.shift();
            while (concealedMsg.includes(substring)) {
                concealedMsg = concealedMsg.replace(substring, replacement);
            }
            console.log(concealedMsg);
        }

        command = arr.shift();
    }

    console.log(`You have a new text message: ${concealedMsg}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);