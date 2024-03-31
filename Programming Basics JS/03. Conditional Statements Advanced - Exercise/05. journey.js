function journey(input) {
    let bugget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let sum = 0;
    let restType = "";

    if (bugget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer": restType = "Camp"; sum = bugget * 0.3; break;
            case "winter": restType = "Hotel"; sum = bugget * 0.7; break;
        }

    } else if (bugget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer": restType = "Camp"; sum = bugget * 0.4; break;
            case "winter": restType = "Hotel"; sum = bugget * 0.8; break;
        }


    } else if (bugget > 1000) {
        destination = "Europe";
        restType = "Hotel";
        sum = bugget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${restType} - ${sum.toFixed(2)}`);

}
journey(["1500", "summer"]);