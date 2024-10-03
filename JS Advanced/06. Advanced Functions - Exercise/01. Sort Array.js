function sortArray(input, str) {
    input.sort((a, b) => str == 'asc' ? a - b : b - a);
    return input;
}
sortArray([14, 7, 17, 6, 8], 'desc');