function mirrorWords(input) {
    let pattern = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;
    let str = input.shift();
    let matches = str.matchAll(pattern);
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let count = 0;

    for (let match of matches) {
        if (match) {
            let currentWord1 = match.groups.word1;
            let currentWord2 = match.groups.word2;
            let arrCurrentWord1 = currentWord1.split('').reverse();
            let arrCurrentWord2 = currentWord2.split('');
            let curWord1 = arrCurrentWord1.join('');
            let curWord2 = arrCurrentWord2.join('');
            count++;
            if (curWord1 === curWord2) {
                arr1.push(currentWord1);
                arr2.push(curWord2);
            }
        }
    }
    if (count > 0) {
        console.log(`${count} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    if (arr1.length > 0) {
        for (let index = 0; index < arr1.length; index++) {
            let el1 = arr1[index];
            let el2 = arr2[index];
            arr3.push(`${el1} <=> ${el2}`);
        }
    }

    if (arr1.length > 0) {
        console.log('The mirror words are:');
        console.log(arr3.join(', '));
    } else {
        console.log('No mirror words!');
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);

console.log('-----------');

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);