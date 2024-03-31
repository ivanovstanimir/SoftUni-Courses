function triplesOfLatinLetters(parameter) {
   
    let numParameter = Number(parameter);
    let startingIndex = "a".charCodeAt();

    for (let i = 0; i < numParameter; i++) {

        for (let k = 0; k < numParameter; k++) {

            for (let j = 0; j < numParameter; j++) {
            let char1 = String.fromCharCode(startingIndex + i)
            let char2 = String.fromCharCode(startingIndex + k)
            let char3 = String.fromCharCode(startingIndex + j)
            
            console.log(`${char1}${char2}${char3}`);

            }
        }
    }
}




triplesOfLatinLetters("2");