function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let volime = width * length * height;
    let totalBoxes = 0;

    let index = 3;
    let command = input[index];
    index++;

    while (command !== "Done") {
        let boxes = Number(command);
        totalBoxes += boxes;
        if (totalBoxes >= volime) {
            console.log(`No more free space! You need ${totalBoxes - volime} Cubic meters more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "Done") {
        if (volime > totalBoxes) {
            console.log(`${volime - totalBoxes} Cubic meters left.`);
        }
    }


}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);