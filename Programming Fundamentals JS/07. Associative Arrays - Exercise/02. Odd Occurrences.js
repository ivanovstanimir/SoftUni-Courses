function oddOccurrences(parameters) {
    let arr = parameters.split(" ").map(el => el.toLowerCase());
    let map = new Map;

    for (let word of arr) {
        let count = 0;
        for (let secondWord of arr) {
            if (word == secondWord) {
                count++;
            }
        }

        map.set(word, count);
    }

    let arrMap = Array.from(map.entries());
    let filteredMap = arrMap.filter(([word, count]) => count % 2 != 0);
    let result = [];

    for (let el of filteredMap) {
        let currentWord = el[0];
        result.push(currentWord);
    }
    console.log(result.join(" "));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');