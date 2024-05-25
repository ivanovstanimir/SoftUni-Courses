function printNthElement(arr) {
    let step = Number(arr[arr.length - 1]);
    let result = [];

    for (let index = 0; index < arr.length - 1; index += step) {
        result.push(arr[index]);

    }

    console.log(result.join(' '));

}
printNthElement(['5', '20', '31', '4', '20', '2']);