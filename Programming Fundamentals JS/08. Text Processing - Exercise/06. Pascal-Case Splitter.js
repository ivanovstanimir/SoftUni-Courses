function pascalCaseSplitter(text) {
   let result = text[0];
   let lower = text.toLowerCase();
   
   for (let index = 1; index < text.length; index++) {
    let currentChar = text[index];

    if (currentChar !== lower[index]) {
        result += ', '
    }
    
    result += currentChar;
   }
    
   console.log(result);
}
pascalCaseSplitter('HoldTheDoor');