function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    let half = Math.floor(arr.length / 2);
    let spliced = arr.splice(half,);

    return spliced;
}
let result = biggerHalf([3, 19, 14, 7, 2, 19, 6]);
console.log(result);
