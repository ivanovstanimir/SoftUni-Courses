function skiTrip(input) {
    let days = Number(input[0]);
    let rooms = input[1];
    let evaluation = input[2];

    days = days - 1;
    let price = 0;

    switch (rooms) {
        case "room for one person":
            price = days * 18;
            break;

        case "apartment":
            price = days * 25;
            if (days < 10) {
                price *= 0.7;
            } else if (days >= 10 && days <= 15) {
                price *= 0.65;
            } else if (days > 15) {
                price *= 0.5;
            }
            break;

        case "president apartment":
            price = days * 35;
            if (days < 10) {
                price *= 0.9;
            } else if (days >= 10 && days <= 15) {
                price *= 0.85;
            } else if (days > 15) {
                price *= 0.8;
            }
            break;
    }

    if (evaluation === "positive") {
        price *= 1.25;
    } else if (evaluation === "negative") {
        price *= 0.90;
    }

    console.log(price.toFixed(2));

}


skiTrip(["14", "apartment", "positive"]);