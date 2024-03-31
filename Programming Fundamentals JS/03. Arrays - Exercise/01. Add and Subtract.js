function addAndSubtract(nums) {
    let newArr = [];
    let evenSum = 0;
    let oddSum = 0; 
    let sumNums = 0;
    let sumNewArr = 0

    for (let index = 0; index < nums.length; index++) {
        sumNums += nums[index];
        if (nums[index] % 2 === 0) {
            evenSum = nums[index] + index;
            newArr[index] = evenSum;

        }else {
            oddSum = nums[index] - index;
            newArr[index] = oddSum;
        }
        
    }

    for (let index = 0; index < newArr.length; index++) {
        sumNewArr += newArr[index];
        
    }

    console.log(newArr);
    console.log(sumNums);
    console.log(sumNewArr);
}
addAndSubtract([-5, 11, 3, 0, 2]);