function extractIncreasingSubsequenceFromArray(arr) {
    let result = [];
    let biggest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggest) {
            result.push(arr[i]);
            biggest = arr[i];
        }
    }
    return result;
}
let nums = extractIncreasingSubsequenceFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);

    console.log(nums);
    