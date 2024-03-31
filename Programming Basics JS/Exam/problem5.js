function profit(input) {
    const dayTarget = Number(input[0]);
    if (dayTarget < 1 || dayTarget > 5000) {
        console.log("The day profit target must be between 1 and 5000");
        return;
    }

    let achievedTarget = 0;
    input.shift(); //removes the day target from the input array
    for (let i = 0; i < input.length; i++) {
        let order = input[i];

        if (order === "closed") {
            break;
        }

        if (achievedTarget >= dayTarget) {
            break;
        }

        if (order === "haircut") {
            i++;
            order = input[i];
            if (order === "mens") {
                achievedTarget = achievedTarget + 15;
            }
            if (order === "ladies") {
                achievedTarget = achievedTarget + 20;
            }
            if (order === "kids") {
                achievedTarget = achievedTarget + 10;
            }
        }

        if (order === "color") {
            i++;
            order = input[i];
            if (order === "touch up") {
                achievedTarget = achievedTarget + 20;
            }
            if (order === "full color") {
                achievedTarget = achievedTarget + 30;
            }
        }
    }

    if (achievedTarget < dayTarget) {
        const notAchievedTarget = dayTarget - achievedTarget;
        console.log(`Target not reached! You need ${notAchievedTarget}lv. more.`);
        console.log(`Earned money: ${achievedTarget}lv.`);
    } else {
        console.log(`You have reached your target for the day!`);
         console.log(`Earned money: ${achievedTarget}lv.`);
    }

}

profit(["300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"])

profit(["50",
    "color",
    "full color",
    "haircut",
    "ladies"])