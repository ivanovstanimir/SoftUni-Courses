function minNumber(input) {

    let minNumber = Number.POSITIVE_INFINITY;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Stop") {
        let num = Number(command);
        if (num < minNumber) {
            minNumber = num;
        }
        command = input[index];
        index++;
    }

    console.log(minNumber);

}
minNumber(["-10",
    "20",
    "-30",
    "Stop"]);