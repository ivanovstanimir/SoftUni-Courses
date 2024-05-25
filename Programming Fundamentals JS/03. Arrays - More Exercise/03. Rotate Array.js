function rotateArray(arr) {
    let removed = arr.pop();

    for (let index = 1; index <= removed; index++) {
        let currentIndex = arr.pop();
        arr.unshift(currentIndex);

    }

    console.log(arr.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);