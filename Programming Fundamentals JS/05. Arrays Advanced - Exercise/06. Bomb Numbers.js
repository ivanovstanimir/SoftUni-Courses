function bombNumbers(nums, bombInfo) {
    let [bombNum, power] = bombInfo;
    let sum = 0;

    for (let index = 0; index < nums.length; index++) {
        let currentEl = nums[index];

        if (currentEl === bombNum) {
            nums.splice(Math.max(0, index - power), (power * 2) + 1, 0);
        }
    }

    for (let j = 0; j < nums.length; j++) {
        let curElement = nums[j];
        sum += curElement;
    }

    console.log(sum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);