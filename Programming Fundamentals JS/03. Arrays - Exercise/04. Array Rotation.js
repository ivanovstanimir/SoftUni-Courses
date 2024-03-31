function arrayRotation(array, rotation) {
    for (let index = 1; index <= rotation; index++) {
        let curIndex = array.shift();
        array.push(curIndex);

    }

    console.log(array.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);