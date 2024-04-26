function towns(arr) {
    for (let index of arr) {
        let info = index.split(" | ");
        let townName = info[0];
        let townLatitude = Number(info[1]).toFixed(2);
        let townLongitude = Number(info[2]).toFixed(2);

        let object = {
            town: townName,
            latitude: townLatitude,
            longitude: townLongitude
        }

        console.log(object);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
