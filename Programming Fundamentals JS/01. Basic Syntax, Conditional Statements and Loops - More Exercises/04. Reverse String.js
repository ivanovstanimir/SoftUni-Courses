function reverseString(str) {
    let word = "";

    for (let index = str.length - 1; index >= 0; index--) {
            word += str[index];
            
        }

        console.log(word);
    
}
reverseString("Hello");