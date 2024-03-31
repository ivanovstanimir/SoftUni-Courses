function courierExpress(input) {
    let weightKg = Number(input[0]);
    let serviceType = input[1];
    let distanceKm = Number(input[2]);

    let sum = 0;
    let trnsportPrice = 0;
    let overPricedKg = 0;
    let overPricedKm = 0;
    let totalOverPrice = 0;

    if (serviceType === "standard") {
        if (weightKg < 1) {
            sum = (distanceKm * 3) / 100;

        } else if (weightKg < 10) {
            sum = (distanceKm * 5) / 100;

        } else if (weightKg < 40) {
            sum = (distanceKm * 10) / 100;

        } else if (weightKg < 90) {
            sum = (distanceKm * 15) / 100;

        } else if (weightKg < 150) {
            sum = (distanceKm * 20) / 100;

        }

    } else if (serviceType === "express") {
        if (weightKg < 1) {
            trnsportPrice = distanceKm * 0.03;
            overPricedKg = (0.03 * 80) / 100;
            overPricedKm = weightKg * overPricedKg;
            totalOverPrice = distanceKm * overPricedKm;
            sum = totalOverPrice + trnsportPrice;

        } else if (weightKg < 10) {
            trnsportPrice = distanceKm * 0.05;
            overPricedKg = (0.05 * 40) / 100;
            overPricedKm = weightKg * overPricedKg;
            totalOverPrice = distanceKm * overPricedKm;
            sum = totalOverPrice + trnsportPrice;

        } else if (weightKg < 40) {
            trnsportPrice = distanceKm * 0.1;
            overPricedKg = (0.1 * 5) / 100;
            overPricedKm = weightKg * overPricedKg;
            totalOverPrice = distanceKm * overPricedKm;
            sum = totalOverPrice + trnsportPrice;

        } else if (weightKg < 90) {
            trnsportPrice = distanceKm * 0.15;
            overPricedKg = (0.15 * 2) / 100;
            overPricedKm = weightKg * overPricedKg;
            totalOverPrice = distanceKm * overPricedKm;
            sum = totalOverPrice + trnsportPrice;

        } else if (weightKg < 150) {
            trnsportPrice = distanceKm * 0.2;
            overPricedKg = (0.2 * 1) / 100;
            overPricedKm = weightKg * overPricedKg;
            totalOverPrice = distanceKm * overPricedKm;
            sum = totalOverPrice + trnsportPrice;

        }

    }


    console.log(`The delivery of your shipment with weight of ${weightKg.toFixed(3)} kg. would cost ${sum.toFixed(2)} lv.`);

}
courierExpress(["87",
    "express",
    "130"]);