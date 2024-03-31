function numbersDivisibleBy9(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let sum = 0;

    for (let num = startNum; num <= endNum; num++) {
        if (num % 9 === 0) {
            sum += num;
        }

    } console.log(`The sum: ${sum}`);

    for (let num = startNum; num <= endNum; num++) {
        if (num % 9 === 0) {
            console.log(num);
        }
    }

}


numbersDivisibleBy9(["100", "200"]);