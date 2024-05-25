function magicMatrices(matrix) {
    let rowTotal = matrix[0].reduce((a, b) => a + b);
    let colTotal = 0;

    for (let row of matrix) {
        colTotal += row[0];
    }

    let result = true;

    for (let i = 0; i < matrix.length; i++) {
        const currentRow = matrix[i].reduce((acc, item) => acc + item);
        let currentCol = 0;
        for (let j = 0; j < matrix.length; j++) {
            const num = matrix[j][i];
            currentCol += num;
        }
        if (currentRow !== rowTotal || currentCol !== colTotal) {
            result = false;
            break;
        }

    }

    console.log(result);
}
magicMatrices([
    [4, 5, 6],
    [6, 3, 5],
    [5, 6, 4]]);
