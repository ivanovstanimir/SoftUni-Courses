function tennisRanklist(input) {
    let totalTournament = Number(input[0]);
    let startPoint = Number(input[1]);

    let points = 0;
    let wins = 0;

    for (let i = 2; i < totalTournament + 2; i++) {
        let curIndex = input[i];
        switch (curIndex) {
            case "W": points += 2000; wins++; break;
            case "F": points += 1200; break;
            case "SF": points += 720; break;

        }
    }

    let totalPoints = startPoint + points;
    let averagePoints = points / totalTournament;
    let winsPercent = (wins / totalTournament) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winsPercent.toFixed(2)}%`);

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
