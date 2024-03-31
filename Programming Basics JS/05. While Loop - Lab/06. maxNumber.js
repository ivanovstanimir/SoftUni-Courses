function maxNumber(input) {

    let maxNumber = Number.NEGATIVE_INFINITY;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Stop") {
        let num = Number(command);
        if (num > maxNumber) {
            maxNumber = num;
        }
        command = input[index];
        index++;

    }

    console.log(maxNumber);

}
maxNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"]);