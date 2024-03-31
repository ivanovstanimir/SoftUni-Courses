function ss(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let volume = width * length * height;

    let index = 3;
    let command = input[index];
    index++

    while (command !== "Done") {
        let boxesCount = Number(command);
        volume -= boxesCount;

        if (volume <= 0) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "Done") {
        console.log(`${volume} Cubic meters left.`);
    }
    
}
ss(["10", "1", "2", "4", "6", "Done"]);