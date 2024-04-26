function convertToJSON(firstName, lastName, hairColor) {
    let info = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }

    let infoJSON = JSON.stringify(info);
    console.log(infoJSON);
}
convertToJSON('George', 'Jones', 'Brown');