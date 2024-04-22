function sumFirstAndLast(arr) {
    let nums = arr.map(Number);

    let firstNum = nums[0];
    let lastNum = nums.pop();

    console.log(firstNum + lastNum);
}
sumFirstAndLast(['20', '30', '40']);