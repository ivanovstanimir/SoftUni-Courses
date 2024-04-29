function partyTime(arr) {
    let vipList = [];
    let regularList = [];

    let command = arr.shift();

    while (command !== "PARTY") {
        if (isNaN(command[0])) {
            regularList.push(command);

        } else {
            vipList.push(command);
        }

        command = arr.shift();

    }

    let fullList = vipList.concat(regularList);

    for (let guests of arr) {
        if (fullList.includes(guests)) {
            fullList.splice(fullList.indexOf(guests), 1)
        }
    }

    console.log(fullList.length);

    for (let guests of fullList) {
        console.log(guests);
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);