function modernTimesOfHashTag(text) {
    let words = text.split(' ');
    let hashtags = words.filter(word => word.startsWith('#') && word.length > 1);

    for (let hashtag of hashtags) {
        let specialWord = hashtag.slice(1);

        let pattern = /\b[A-Za-z]+\b/;
        if (pattern.test(specialWord)) {
            console.log(specialWord);
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');