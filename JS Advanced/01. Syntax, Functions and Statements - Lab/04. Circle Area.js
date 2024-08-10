function circleArea(param) {
    let type = typeof param;

    if (type === 'number') {
        let area = Math.PI * Math.pow(param, 2);
        console.log(area.toFixed(2));

    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
circleArea(5);