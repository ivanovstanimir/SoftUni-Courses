function hotelRoom(input) {
    let month = input[0];
    let nightCount = Number(input[1]);

    let priceStudio = 0;
    let priceApartament = 0;

    switch (month) {
        case "May":
            priceStudio = nightCount * 50;
            priceApartament = nightCount * 65;
            if (nightCount > 7 && nightCount < 14) {
                priceStudio *= 0.95;
            } else if (nightCount > 14) {
                priceStudio *= 0.70;
            }
            break;

        case "June":
            priceStudio = nightCount * 75.20;
            priceApartament = nightCount * 68.70;
            if (nightCount > 14) {
                priceStudio *= 0.80;
            }
            break;

        case "July":
            priceStudio = nightCount * 76;
            priceApartament = nightCount * 77;
            break;

        case "August":
            priceStudio = nightCount * 76;
            priceApartament = nightCount * 77;
            break;

        case "September":
            priceStudio = nightCount * 75.20;
            priceApartament = nightCount * 68.70;
            if (nightCount > 14) {
                priceStudio *= 0.80;
            }
            break;

        case "October":
            priceStudio = nightCount * 50;
            priceApartament = nightCount * 65;
            if (nightCount > 7 && nightCount < 14) {
                priceStudio *= 0.95;
            } else if (nightCount > 14) {
                priceStudio *= 0.70;
            }
            break;
    }

    if (nightCount > 14) {
        priceApartament *= 0.90;
    }

    console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}


hotelRoom(["June", "14"]);

