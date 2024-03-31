function tradeCommissions(input) {
    let city = input[0];
    let saleQty = Number(input[1]);

    let commission = 0;

    if (saleQty >= 0 && saleQty <= 500) {
        switch (city) {
            case "Sofia": commission = saleQty * 0.05; break;
            case "Varna": commission = saleQty * 0.045; break;
            case "Plovdiv": commission = saleQty * 0.055; break;
        }

    } else if (saleQty > 500 && saleQty <= 1000) {
        switch (city) {
            case "Sofia": commission = saleQty * 0.07; break;
            case "Varna": commission = saleQty * 0.075; break;
            case "Plovdiv": commission = saleQty * 0.08; break;
        }

    } else if (saleQty > 1000 && saleQty <= 10000) {
        switch (city) {
            case "Sofia": commission = saleQty * 0.08; break;
            case "Varna": commission = saleQty * 0.10; break;
            case "Plovdiv": commission = saleQty * 0.12; break;
        }

    } else if (saleQty > 10000) {
        switch (city) {
            case "Sofia": commission = saleQty * 0.12; break;
            case "Varna": commission = saleQty * 0.13; break;
            case "Plovdiv": commission = saleQty * 0.145; break;
        }
    }

    if (city !== "Sofia" && city !== "Varna" && city !== "Plovdiv") {
        console.log("error");

    } else if (saleQty < 0) {
        console.log("error");
    } else {
        console.log(commission.toFixed(2));
    }

}
tradeCommissions(["Sofia", "1500"]);
