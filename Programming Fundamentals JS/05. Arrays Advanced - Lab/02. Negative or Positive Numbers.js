function negativeOrPositiveNumbers(arr) {
    let nums = arr.map(Number);
    let newArr = [];

    for (let i of nums) {
        if (i >= 0) {
            newArr.push(i);

        } else {
            newArr.unshift(i);
        }
    }

    for (let j of newArr) {
        console.log(j);
    }

}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);