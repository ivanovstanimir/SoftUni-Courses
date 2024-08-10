function aggregateElements(arr) {
    let sum = 0;
    let inverseSum = 0;
    let concat = '';

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sum += element;
        inverseSum += 1 / element;
        concat += element;
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}
aggregateElements([2, 4, 8, 16]);