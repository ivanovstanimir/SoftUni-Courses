function processOddPositions(arr) {
    let arrLength = arr.length;
    const newArr = [];
    for (let index = 0; index < arrLength; index++) {
        let element = arr[index];
        if (index % 2 !== 0) {
            element *= 2;
            newArr.push(element);
        }
    }

    newArr.reverse();
    console.log(newArr.join(' '));
}
processOddPositions([10, 15, 20, 25]);