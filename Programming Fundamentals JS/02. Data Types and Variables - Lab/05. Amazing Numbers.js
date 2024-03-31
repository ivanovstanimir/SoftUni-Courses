function amazingNumbers(num) {
    let numString = String(num);
    let sum = 0;
    let isNine = false;

    for (let index = 0; index < numString.length; index++) {
        let curindrx = Number(numString[index]);
        sum += curindrx;

    }

    let sumString = String(sum);

    for (let index = 0; index < sumString.length; index++) {
        let curIndex = sumString[index];

        if (curIndex == 9) {
            isNine = true;
        }

    }

    console.log(`${num} Amazing? ${isNine ? "True" : "False"}`);
}
amazingNumbers(1233);
console.log("-----");
amazingNumbers(999);