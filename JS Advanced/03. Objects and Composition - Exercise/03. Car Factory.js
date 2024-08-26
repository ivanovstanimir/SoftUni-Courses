function carFactory(input) {
    let result = {};
    let engine = {};
    let carriage = {};

    if (input.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;

    } else if (input.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;

    } else if (input.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    carriage.type = input.carriage;
    carriage.color = input.color;

    if (input.wheelsize % 2 === 0) {
        input.wheelsize--;
    }

    result.model = input.model;
    result.engine = engine;
    result.carriage = carriage;
    result.wheels = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];

    return result;
}
carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 });