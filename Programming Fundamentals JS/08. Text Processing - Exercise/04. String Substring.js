function stringSubstring(word, text) {
    let newWord = word.toLowerCase();
    let newText = text.toLowerCase().split(' ');
  
    if (newText.includes(newWord)) {
        console.log(newWord);

    }else {
        console.log(`${newWord} not found!`);
    }
}
stringSubstring('python',
    'JavaScript is the best programming language');