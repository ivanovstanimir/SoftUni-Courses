function subSum(arr, startIndex, endIndex) {

    if (Array.isArray(arr) == false) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    let sum = arr
        .slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((acc, x) => acc + x, 0);

    return sum;
}
subSum([10, 20, 30, 40, 50, 60], 3, 300);