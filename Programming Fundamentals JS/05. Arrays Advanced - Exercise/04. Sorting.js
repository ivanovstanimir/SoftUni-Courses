function sorting(nums) {
    nums.sort((a, b) => a - b);
    let newArr = [];

    while (nums.length > 0) {
        let maxNum = nums.pop();
        let minNum = nums.shift();

        newArr.push(maxNum);
        newArr.push(minNum);
    }

    console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);