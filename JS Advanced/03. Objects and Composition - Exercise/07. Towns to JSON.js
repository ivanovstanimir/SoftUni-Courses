function townsToJSON(input) {
    let result = [];
    class Town {
        constructor(town, latitude, longitude) {
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }
    }

    for (let index = 1; index < input.length; index++) {
        let text = input[index].split('|').map(t => t.trim()).filter(x => x.length !== 0);
        let townName = text.shift();
        let latitude = Number(text.shift()).toFixed(2);
        let longitude = Number(text.shift()).toFixed(2);
        let town = new Town(townName, latitude, longitude);
        result.push(town);
    }

    return JSON.stringify(result);
}
let json = townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

console.log(json);
