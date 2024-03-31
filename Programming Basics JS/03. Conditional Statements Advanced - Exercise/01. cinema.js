function cinema(input) {
    let type = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);

    let seatCount = row * column;
    let sum = 0;

    switch (type) {
        case "Premiere": sum = seatCount * 12.00; break
        case "Normal": sum = seatCount * 7.50; break;
        case "Discount": sum = seatCount * 5.00; break;
    }
    console.log(`${sum.toFixed(2)} leva`);


}
cinema(["Discount", "12", "30"]);
