function needForSpeedIII(arr) {
    let carsCount = Number(arr.shift());
    let carsObj = {};
    for (let index = 0; index < carsCount; index++) {
        let info = arr.shift().split('|');
        let cars = info.shift();
        let mileage = Number(info.shift());
        let fuel = Number(info.shift());
        carsObj[cars] = { mileage, fuel };
    }

    let command = arr.shift();
    while (command !== 'Stop') {
        let text = command.split(' : ');
        let instruction = text.shift(' : ');
        if (instruction === 'Drive') {
            let currentCar = text.shift();
            let distance = Number(text.shift());
            let currentFuel = Number(text.shift());
            let mileage = carsObj[currentCar].mileage;
            let fuel = carsObj[currentCar].fuel;
            if (fuel < currentFuel) {
                console.log('Not enough fuel to make that ride');
                carsObj[currentCar].fuel = fuel;
            } else {
                console.log(`${currentCar} driven for ${distance} kilometers. ${currentFuel} liters of fuel consumed.`);
                mileage += distance;
                fuel -= currentFuel;
                carsObj[currentCar].mileage = mileage;
                carsObj[currentCar].fuel = fuel;
                if (mileage >= 100000) {
                    console.log(`Time to sell the ${currentCar}!`);
                    delete carsObj[currentCar];
                }
            }

        } else if (instruction === 'Refuel') {
            let currentCar = text.shift();
            let currentFuel = Number(text.shift());
            let fuel = carsObj[currentCar].fuel;
            if (fuel + currentFuel > 75) {
                currentFuel = 75 - fuel;
                fuel = 75;
                carsObj[currentCar].fuel = fuel;
            } else {
                fuel += currentFuel;
                carsObj[currentCar].fuel = fuel;
            }
            console.log(`${currentCar} refueled with ${currentFuel} liters`);

        } else if (instruction === 'Revert') {
            let currentCars = text.shift();
            let kilometers = Number(text.shift());
            mileage = carsObj[currentCars].mileage;
            if (mileage - kilometers < 10000) {
                mileage = 10000;
                carsObj[currentCars].mileage = mileage;
            } else {
                console.log(`${currentCars} mileage decreased by ${kilometers} kilometers`);
                mileage -= kilometers;
                carsObj[currentCars].mileage = mileage;
            }
        }

        command = arr.shift();
    }

    let entries = Object.entries(carsObj);
    for (const [car, obj] of entries) {
        let { mileage, fuel } = obj;
        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }
}

let input1 = [
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'];

let input2 = [
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'];

needForSpeedIII(input2);

