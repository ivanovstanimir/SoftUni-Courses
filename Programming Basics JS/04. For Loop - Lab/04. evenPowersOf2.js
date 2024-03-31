function evenPowersOf2(input) {
    let power = Number(input[0]);
    let sum = 0;

    for (let index = 0; index <= power; index++) {
        if (index % 2 === 0) {
            console.log(sum = Math.pow(2, index));
        }
    }

}
evenPowersOf2(["5"]);