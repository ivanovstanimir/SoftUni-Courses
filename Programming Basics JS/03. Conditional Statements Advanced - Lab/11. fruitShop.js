function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let qty = Number(input[2]);

    let sum = 0;

    if (fruit === "banana") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": sum = qty * 2.50; break;
            case "Saturday":
            case "Sunday": sum = qty * 2.70; break;
        }

    } else if (fruit === "apple") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": sum = qty * 1.20; break;
            case "Saturday":
            case "Sunday": sum = qty * 1.25; break;
        }

    } else if (fruit === "orange") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": sum = qty * 0.85; break;
            case "Saturday":
            case "Sunday": sum = qty * 0.90; break;
        }

    } else if (fruit === "grapefruit") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": sum = qty * 1.45; break;
            case "Saturday":
            case "Sunday": sum = qty * 1.60; break;
        }

    } else if (fruit === "kiwi") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": sum = qty * 2.70; break;
            case "Saturday":
            case "Sunday": sum = qty * 3.00; break;
        }

    } else if (fruit === "pineapple") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": sum = qty * 5.50; break;
            case "Saturday":
            case "Sunday": sum = qty * 5.60; break;
        }

    } else if (fruit === "grapes") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": sum = qty * 3.85; break;
            case "Saturday":
            case "Sunday": sum = qty * 4.20; break;
        }
    }

    if (fruit !== "banana" && fruit !== "apple" && fruit !== "orange" && fruit !== "grapefruit" && fruit !== "kiwi" && fruit !== "pineapple" && fruit !== "grapes") {
        console.log("error");

    } else if (day !== "Monday" && day !== "Tuesday" && day !== "Wednesday" && day !== "Thursday" && day !== "Friday" && day !== "Saturday" && day !== "Sunday") {
        console.log("error");
    } else {
        console.log(sum.toFixed(2));
    }

}
fruitShop(["grapes", "Saturday", "0.5"]);
