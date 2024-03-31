function building(input) {
    let floor = Number(input[0]);
    let rooms = Number(input[1]);

    for (let x = floor; x >= 1; x--) {
        let currentFloor = "";
        for (let y = 0; y < rooms; y++) {
            if (x === floor) {
                currentFloor += (`L${x}${y} `);
            } else if (x % 2 === 0) {
                currentFloor += (`O${x}${y} `);
            } else {
                currentFloor += (`A${x}${y} `);
            }
        }
        console.log(currentFloor);
    }
    
}
building(["9", "5"]);