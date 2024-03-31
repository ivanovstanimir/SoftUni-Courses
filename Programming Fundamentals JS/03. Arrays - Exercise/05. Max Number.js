function maxNumber(arr) {
    let result = [];

    for (let index = 0; index < arr.length; index++) {
        let isTop = true;
        let curIndex = arr[index];
        for (let j = index + 1; j < arr.length; j++) {
            let rightIndex = arr[j];
            if (rightIndex >= curIndex) {
                isTop = false;
                break;
            }

        }

        if (isTop) {
            result.push(curIndex);
        }

    }

    console.log(result.join(' '));

}
maxNumber([27, 19, 42, 2, 13, 45, 48]);