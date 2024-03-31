function vacation(peopleCount, groupType, weekDay) {
    let price = 0;

    if (weekDay == "Friday") {
        switch (groupType) {
            case "Students": price = 8.45; break;
            case "Business": price = 10.90; break;
            case "Regular": price = 15; break;
        }

    } else if (weekDay == "Saturday") {
        switch (groupType) {
            case "Students": price = 9.80; break;
            case "Business": price = 15.60; break;
            case "Regular": price = 20; break;
        }

    } else if (weekDay == "Sunday") {
        switch (groupType) {
            case "Students": price = 10.46; break;
            case "Business": price = 16; break;
            case "Regular": price = 22.50; break;
        }
    }

    let totalPrice = peopleCount * price;

    if (groupType == "Students" && peopleCount >= 30) {
        totalPrice *= 0.85;

    } else if (groupType == "Business" && peopleCount >= 100) {
        let discount = 10 * price;
        totalPrice -= discount;

    } else if (groupType == "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(30, "Students", "Sunday");