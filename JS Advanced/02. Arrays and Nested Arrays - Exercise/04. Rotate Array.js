function rotateArray(arr, num) {
    for (let index = 0; index < num; index++) {
        let el = arr.pop();
        arr.unshift(el);
    }

    let result = arr.join(' ');
    console.log(result);
}
rotateArray(['1',
    '2',
    '3',
    '4'],
    2);