// function ss() {
//     let arr = [[4, 5, 6], [6, 5, 4], [5, 5, 5]];

//     arr.forEach(printRow);
//     function printRow(row) {
//         console.log(row);
//         row.forEach(printNumber);
//     }
//     function printNumber(num) {
//         console.log(num);
//     };
// }
// ss();

function ss() {
    let arr = [[4, 5, 6], [6, 5, 4], [5, 5, 5]];

    arr.forEach(row => {
        console.log(row);
        row.forEach(num => {
            console.log(num);
        });
    });
}
ss();

function equal(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        for (let j = 0; j < row.length; j++) {
            let col = row[j];
 
            if (i !== arr.length - 1) {
                if (col === row[j + 1]) {
                    counter++;
                }
                if (col === arr[i + 1][j]) {
                    counter++;
                }
            }
            else if (col === row[j + 1] || col === arr[i][j + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}
equal([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);