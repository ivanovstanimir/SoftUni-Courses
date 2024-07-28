function worldTour(arr) {
    let stops = arr.shift();
    let command = arr.shift();
    while (command !== 'Travel') {
        let info = command.split(':');
        let instruction = info.shift();
        if (instruction === 'Add Stop') {
            let index = Number(info.shift());
            let str = info.shift();
            if (stops.length >= index) {
                let arrStops = stops.split('');
                arrStops.splice(index, 0, str);
                stops = arrStops.join('');
            }

        } else if (instruction === 'Remove Stop') {
            let starIndex = Number(info.shift());
            let endIndex = Number(info.shift());
            if (starIndex >= 0 && starIndex < stops.length &&
                endIndex >= 0 && endIndex < stops.length &&
                starIndex <= endIndex) {
                let arrStops = stops.split('');
                let removed = (endIndex - starIndex) + 1;
                arrStops.splice(starIndex, removed);
                stops = arrStops.join('');
            }

        } else if (instruction === 'Switch') {
            let oldStr = info.shift();
            let newStr = info.shift();
            let offset = 0;
            while (stops.indexOf(oldStr, offset) >= 0) {
                stops = stops.replace(oldStr, (oldStr, offset) => newStr);
                offset = stops.indexOf(oldStr, offset) + newStr.length;
            }
        }

        console.log(stops);
        command = arr.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);