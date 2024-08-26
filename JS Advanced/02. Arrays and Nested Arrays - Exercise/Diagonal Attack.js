function diagonalAttack(arr) {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        let currntArr = element.split(' ').map(Number);
        newArr.push(currntArr);
    }

    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = newArr[0].length - 1;

    newArr.forEach(array => {
        firstDiagonal += array[firstIndex];
        firstIndex++;
        secondDiagonal += array[secondIndex];
        secondIndex--;
    });

    if (firstDiagonal === secondDiagonal) {
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < newArr.length; j++) {
                if (j !== newArr.length - 1 - i && j !== i) {
                    newArr[i][j] = firstDiagonal;
                }
            }
        }
        for (let index = 0; index < newArr.length; index++) {
            let currentArr = newArr[index];
            console.log(currentArr.join(' '));
        }

    } else {

        for (let i = 0; i < newArr.length; i++) {
            let currentArr = newArr[i];
            console.log(currentArr.join(' '));
        }
    }
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);