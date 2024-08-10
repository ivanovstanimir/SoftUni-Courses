function squareOfStars(num) {
    if (num) {
        for (let index = 1; index <= num; index++) {
            console.log('* '.repeat(num));
        }
    }
}
squareOfStars(5);