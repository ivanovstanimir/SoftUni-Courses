function biggestElement(arr) {
    let maxNumber = Number.NEGATIVE_INFINITY;
    arr.forEach(row => {
        row.forEach(num => {
            if (num > maxNumber) {
                maxNumber = num;
            }
        });
    });

    return maxNumber;
}
let result = biggestElement([[20, 50, 10], [8, 33, 145]]);

console.log(result);
