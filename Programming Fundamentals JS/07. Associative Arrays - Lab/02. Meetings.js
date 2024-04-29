function meetings(arr) {
    let meetings = {};
    
    for(let element of arr) {
        let [weekDay, name] = element.split(" ");
        if (meetings.hasOwnProperty(weekDay)) {
            console.log(`Conflict on ${weekDay}!`);

        } else {
            meetings[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        }
    }

    for (let [key, value] of Object.entries(meetings)) {
        console.log(`${key} -> ${value}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);