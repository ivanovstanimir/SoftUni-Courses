function destinationMapper(str) {
    let pattern = /([=/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let matches = str.matchAll(pattern);
    let arrDestination = [];
    let travelPoints = 0;

    for (let match of matches) {
        let currentDestination = match.groups.destination;
        arrDestination.push(currentDestination);
        travelPoints += currentDestination.length;
    }

    let result = arrDestination.join(', ');
    console.log(`Destinations: ${result}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

console.log('-----------------');

destinationMapper("ThisIs some InvalidInput");