function race(input) {
    let names = input.shift().split(', ');
    let obj = {};
    names.forEach(name => {
        obj[name] = 0;
    });

    let command = input.shift();

    while (command !== 'end of race') {
        let letterPattern = /[A-Za-z]/g;
        let numPattern = /[\d]/g;
        let currentName = command.match(letterPattern).join('');
        let nums = command.match(numPattern);
        let distance = nums.map(Number).reduce((acc, val) => acc + val);
        if (obj.hasOwnProperty(currentName)) {
            obj[currentName] += distance;
        }
        command = input.shift();
    }

    let entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${entries[0][0]}`);
    console.log(`2nd place: ${entries[1][0]}`);
    console.log(`3rd place: ${entries[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);