function equalArrays(arr1, arr2) {
    let isEqual = true;
    let sum = 0;

    for (let index = 0; index < arr1.length; index++) {
        arr1[index] = Number(arr1[index]);
        sum += arr1[index];

    }


    for (let index = 0; index < arr2.length; index++) {
        arr2[index] = Number(arr2[index]);

    }

    for (let index = 0; index < arr1.length; index++) {
        if (arr1[index] !== arr2[index]) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            isEqual = false;
            break;
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['1'], ['10']);