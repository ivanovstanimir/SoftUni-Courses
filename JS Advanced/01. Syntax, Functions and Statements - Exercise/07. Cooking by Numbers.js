function cookingByNumbers(point, op1, op2, op3, op4, op5) {
    let startingPoint = Number(point);
    let arr = [op1, op2, op3, op4, op5];

    let chop = function () {
        return startingPoint /= 2;
    };

    let dice = function () {
        return startingPoint = Math.sqrt(startingPoint);
    };

    let spice = function () {
        return startingPoint += 1;
    };

    let bake = function () {
        return startingPoint *= 3;
    };

    let fillet = function () {
        return startingPoint *= 0.8;
    };

    for (let operation of arr) {
        if (operation === 'chop') {
            startingPoint = chop();
            console.log(startingPoint);

        } else if (operation === 'dice') {
            startingPoint = dice();
            console.log(startingPoint);

        } else if (operation === 'spice') {
            startingPoint = spice();
            console.log(startingPoint);

        } else if (operation === 'bake') {
            startingPoint = bake();
            console.log(startingPoint);

        } else if (operation === 'fillet') {
            startingPoint = fillet();
            console.log(startingPoint.toFixed(2));
        }
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');