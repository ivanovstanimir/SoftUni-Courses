function rightPlace(string1, char, string2) {
    let word = "";

    for (let index = 0; index < string1.length; index++) {

        if (string1[index] != "_") {
            word += string1[index];

        } else {
            word += char;
        }

    }

    if (word == string2) {
        console.log("Matched");

    } else {
        console.log("Not Matched");
    }

}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');