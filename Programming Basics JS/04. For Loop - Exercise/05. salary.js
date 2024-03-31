function salary(input) {
    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);

    let fine = 0;

    for (let i = 2; i < tabsCount + 2; i++) {
        let curIndex = input[i];
        switch (curIndex) {
            case "Facebook": fine += 150; break;
            case "Instagram": fine += 100; break;
            case "Reddit": fine += 50; break;
        }
    }

    let balance = salary - fine;

    if (balance <= 0) {
        console.log("You have lost your salary.");
        return;

    } else {
        console.log(balance);
    }

}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);