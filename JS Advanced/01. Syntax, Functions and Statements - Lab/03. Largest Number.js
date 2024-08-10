function largestNumber(n1, n2, n3) {
    let largestNum = Number.NEGATIVE_INFINITY;
    if (n1 > largestNum) {
        largestNum = n1;
    }

    if (n2 > largestNum) {
        largestNum = n2;
    }

    if (n3 > largestNum) {
        largestNum = n3;
    }

    console.log(`The largest number is ${largestNum}.`);
}
largestNumber(-3, -5, -22.5);