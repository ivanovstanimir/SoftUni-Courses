function roadRadar(speed, area) {
    let speedLimit = 0;
    let status = '';
    let difference = 0;

    if (area === 'motorway') {
        speedLimit = 130;
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);

        } else {
            if (speed <= (speedLimit + 20)) {
                status = "speeding";
                difference = speed - speedLimit;

            } else if (speed <= (speedLimit + 40)) {
                status = 'excessive speeding';
                difference = speed - speedLimit;

            } else {
                status = 'reckless driving';
                difference = speed - speedLimit;
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);

        }

    } else if (area === 'interstate') {
        speedLimit = 90;
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);

        } else {
            if (speed <= (speedLimit + 20)) {
                status = "speeding";
                difference = speed - speedLimit;

            } else if (speed <= (speedLimit + 40)) {
                status = 'excessive speeding';
                difference = speed - speedLimit;

            } else {
                status = 'reckless driving';
                difference = speed - speedLimit;
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);

        }

    } else if (area === 'city') {
        speedLimit = 50;
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);

        } else {
            if (speed <= (speedLimit + 20)) {
                status = "speeding";
                difference = speed - speedLimit;

            } else if (speed <= (speedLimit + 40)) {
                status = 'excessive speeding';
                difference = speed - speedLimit;

            } else {
                status = 'reckless driving';
                difference = speed - speedLimit;
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);

        }

    } else if (area === 'residential') {
        speedLimit = 20;
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);

        } else {
            if (speed <= (speedLimit + 20)) {
                status = "speeding";
                difference = speed - speedLimit;

            } else if (speed <= (speedLimit + 40)) {
                status = 'excessive speeding';
                difference = speed - speedLimit;

            } else {
                status = 'reckless driving';
                difference = speed - speedLimit;
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);

        }

    }
}
roadRadar(21, 'residential');