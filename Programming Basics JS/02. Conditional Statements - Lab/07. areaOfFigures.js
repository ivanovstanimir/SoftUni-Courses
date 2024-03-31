function areaOfFigures(input) {
    let figureType = input[0];
    let area = 0

    if (figureType === "square") {
        let a = Number(input[1]);
        area = a * a;

    } else if (figureType === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;

    } else if (figureType === "circle") {
        let r = Number(input[1]);
        area = Math.PI * r * r;

    } else if (figureType === "triangle") {
        let a = Number(input[1]);
        let ha = Number(input[2]);
        area = (a * ha) / 2;
    }
    console.log(area.toFixed(3));

}
areaOfFigures(["triangle", "4.5", "20"]);