function oscars(input) {
    let actorName = input[0];
    let points = Number(input[1]);
    let jury = Number(input[2]);

    for (let i = 3; i < (jury * 2) + 3; i += 2) {
        let juryName = input[i];
        let juryPoints = Number(input[i + 1]);
        points += (juryName.length * juryPoints) / 2;

        if (points >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            return;
        }

    }

    let difference = 1250.5 - points;
    console.log(`Sorry, ${actorName} you need ${difference.toFixed(1)} more!`);

}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);