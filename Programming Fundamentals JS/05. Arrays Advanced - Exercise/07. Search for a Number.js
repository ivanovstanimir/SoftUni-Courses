function searchForANumber(nums1, nums2) {
    let takeNums = nums2[0];
    let deleteNums = nums2[1];
    let collectionNum = nums2[2];
    let count = 0;

    let newArr = nums1.slice(0, takeNums);
    newArr.splice(0, deleteNums);

    for (let currentNum of newArr) {
        if (collectionNum === currentNum) {
            count++
        }
    }

    console.log(`Number ${collectionNum} occurs ${count} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);