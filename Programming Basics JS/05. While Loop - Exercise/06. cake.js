function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);

    let totalPieces = width * length;
    let takePeaces = 0;

    let index = 2;
    let command = input[index];
    index++;

    while (command !== "STOP") {
        let pieces = Number(command);
        takePeaces += pieces;
        if (takePeaces >= totalPieces) {
            takePeaces -= totalPieces;
             console.log(`No more cake left! You need ${takePeaces} pieces more.`);
             break;
        }
        command = input[index];
        index++;

    }

    if (command === "STOP") {
        if (totalPieces > takePeaces) {
            totalPieces -= takePeaces;
            console.log(`${totalPieces} pieces are left.`);
        }
    }

}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);
