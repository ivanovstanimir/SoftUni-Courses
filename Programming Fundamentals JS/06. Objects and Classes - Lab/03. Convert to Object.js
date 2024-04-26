function convertToObject(data) {
    let convert = JSON.parse(data);

    for (let key of Object.keys(convert)) {
        console.log(`${key}: ${convert[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');