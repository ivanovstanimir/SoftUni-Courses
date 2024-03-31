function reverseAnArrayOfNumbers(n, arr) {
    let result = [];
    let finalResult = '';

    for (let i = 0; i < n; i++) {
        result[i] = arr[n - 1 - i];
    }

    for (let i = 0; i < result.length; i++) {
        finalResult += result[i];
        if (i < result.length) {
            finalResult += ' ';
        }
    }

    console.log(finalResult);

}

//     let result = [];

//     for (let i = n - 1; i >= 0; i--) {
//        result.push(arr[i]);
//     }
//     console.log(result.join(' '));

// }
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);