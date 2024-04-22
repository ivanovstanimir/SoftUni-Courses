function smallestTwoNumbers(nums) {
    nums.sort((a, b) => a - b);

    let smallestEl = nums.shift();
    let smallestEl2 = nums.shift();
    console.log(`${smallestEl} ${smallestEl2}`);

}
smallestTwoNumbers([30, 15, 50, 5]);