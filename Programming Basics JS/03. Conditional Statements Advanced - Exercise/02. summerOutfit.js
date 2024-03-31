function summerOutfit(input) {
    let deg = Number(input[0]);
    let time = input[1];

    let outfit = "";
    let shoes = "";

    switch (time) {
        case "Morning":
            if (deg <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";

            } else if (deg > 18 && deg <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";

            } else if (deg >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } break;

        case "Afternoon":
            if (deg <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";

            } else if (deg > 18 && deg <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";

            } else if (deg >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            } break;

        case "Evening":
            outfit = "Shirt";
            shoes = "Moccasins";
            break;
    }

    console.log(`It's ${deg} degrees, get your ${outfit} and ${shoes}.`);


}
summerOutfit(["16", "Morning"]);
