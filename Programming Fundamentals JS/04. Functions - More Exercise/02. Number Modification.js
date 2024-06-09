function numberModification(num) {
    let numStr = String(num);
    let count = 0;
    let sum = 0;

    for (let index = 0; index < numStr.length; index++) {
        let currentNum = Number(numStr[index]);
        sum += currentNum;
        count++;
    }

    while (sum / count < 5) {
        numStr += 9;
        sum += 9;
        count++;
    }

    console.log(numStr);
}
numberModification(101);