function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let qty = input[2];

    let sum = 0;

    if (city === "Sofia") {
        switch (product) {
            case "coffee": sum = qty * 0.50; break;
            case "water": sum = qty * 0.80; break;
            case "beer": sum = qty * 1.20; break;
            case "sweets": sum = qty * 1.45; break;
            case "peanuts": sum = qty * 1.60; break;
        }
    } else if (city === "Plovdiv") {
        switch (product) {
            case "coffee": sum = qty * 0.40; break;
            case "water": sum = qty * 0.70; break;
            case "beer": sum = qty * 1.15; break;
            case "sweets": sum = qty * 1.30; break;
            case "peanuts": sum = qty * 1.50; break;
        }
    } else if (city === "Varna") {
        switch (product) {
            case "coffee": sum = qty * 0.45; break;
            case "water": sum = qty * 0.70; break;
            case "beer": sum = qty * 1.10; break;
            case "sweets": sum = qty * 1.35; break;
            case "peanuts": sum = qty * 1.55; break;
        }

    }
    
    console.log(sum);
}
    smallShop(["water", "Plovdiv", "2"]);