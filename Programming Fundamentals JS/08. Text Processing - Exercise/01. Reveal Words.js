function revealWords(str1, str2) {
    let words = str1.split(', ');
    
    words.forEach(word => {
        let match = '*'.repeat(word.length);
        str2 = str2.replace(match, word);
    }); 
    console.log(str2);
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');