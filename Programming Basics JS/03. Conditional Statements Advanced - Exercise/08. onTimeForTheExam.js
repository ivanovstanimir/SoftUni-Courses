function onTimeForTheExam(input) {
    let testHour = Number(input[0]);
    let testMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let totalTestMinute = testHour * 60;
    totalTestMinute = totalTestMinute + testMinute;

    let totalArrivalMinute = arrivalHour * 60;
    totalArrivalMinute = totalArrivalMinute + arrivalMinute;


    if (totalArrivalMinute > totalTestMinute) {
        console.log("Late");

    } else if (totalArrivalMinute >= (totalTestMinute - 30) && totalArrivalMinute <= totalTestMinute) {
        console.log("On time");

    } else if (totalArrivalMinute < (totalTestMinute - 30)) {
        console.log("Early");
    }


    if (totalArrivalMinute !== (totalTestMinute + 1) || totalArrivalMinute !== (totalTestMinute - 1)) {
        if (totalArrivalMinute < totalTestMinute && totalArrivalMinute > (totalTestMinute - 60)) {
            console.log(`${totalTestMinute - totalArrivalMinute} minutes before the start`);

        } else if (totalArrivalMinute <= totalTestMinute - 60) {
            let newMinutes = totalTestMinute - totalArrivalMinute;
            let newHours = Math.floor(newMinutes / 60);
            newMinutes = newMinutes % 60;
            if (newMinutes === 0) {
                newMinutes = "00";
                console.log(`${newHours}:${newMinutes} hours before the start`);
            } else if (newMinutes === 1) {
                newMinutes = "01";
                console.log(`${newHours}:${newMinutes} hours before the start`);
            } else if (newMinutes === 2) {
                newMinutes = "02";
                console.log(`${newHours}:${newMinutes} hours before the start`);
            } else if (newMinutes === 3) {
                newMinutes = "03";
                console.log(`${newHours}:${newMinutes} hours before the start`);
            } else if (newMinutes === 4) {
                newMinutes = "04";
                console.log(`${newHours}:${newMinutes} hours before the start`);
            } else if (newMinutes === 5) {
                newMinutes = "05";
                console.log(`${newHours}:${newMinutes} hours before the start`);
            } else if (newMinutes === 6) {
                newMinutes = "06";
                console.log(`${newHours}:${newMinutes} hours before the start`);
            } else if (newMinutes === 7) {
                newMinutes = "07";
                console.log(`${newHours}:${newMinutes} hours before the start`);
            } else if (newMinutes === 8) {
                newMinutes = "08";
                console.log(`${newHours}:${newMinutes} hours before the start`);
            } else if (newMinutes === 9) {
                newMinutes = "09";
                console.log(`${newHours}:${newMinutes} hours before the start`);
            } else {
                console.log(`${newHours}:${newMinutes} hours before the start`);
            }


        } else if (totalArrivalMinute > totalTestMinute && totalArrivalMinute < (totalTestMinute + 60)) {
            console.log(`${totalArrivalMinute - totalTestMinute} minutes after the start`);

        } else if (totalArrivalMinute >= (totalTestMinute + 60)) {
            let newMinutes = totalArrivalMinute - totalTestMinute;
            let newHours = Math.floor(newMinutes / 60);
            newMinutes = newMinutes % 60; 
            if (newMinutes === 0) {
                newMinutes = "00";
                console.log(`${newHours}:${newMinutes} hours after the start`);
            } else if (newMinutes === 1) {
                newMinutes = "01";
                console.log(`${newHours}:${newMinutes} hours after the start`);
            } else if (newMinutes === 2) {
                newMinutes = "02";
                console.log(`${newHours}:${newMinutes} hours after the start`);
            } else if (newHours === 3) {
                newMinutes = "03";
                console.log(`${newHours}:${newMinutes} hours after the start`);
            } else if (newMinutes === 4) {
                newMinutes = "04";
                console.log(`${newHours}:${newMinutes} hours after the start`);
            } else if (newMinutes === 5) {
                newMinutes = "05";
                console.log(`${newHours}:${newMinutes} hours after the start`);
            } else if (newMinutes === 6) {
                newMinutes = "06";
                console.log(`${newHours}:${newMinutes} hours after the start`);
            } else if (newMinutes === 7) {
                newMinutes = "07";
                console.log(`${newHours}:${newMinutes} hours after the start`);
            } else if (newMinutes === 8) {
                newMinutes = "08";
                console.log(`${newHours}:${newMinutes} hours after the start`);
            } else if (newMinutes === 9) {
                newMinutes = "09";
                console.log(`${newHours}:${newMinutes} hours after the start`);
            } else {
                console.log(`${newHours}:${newMinutes} hours after the start`);
            }

        }

    }
}
onTimeForTheExam(["11", "30", "8", "12"]);







// (["16", "00", "15", "00"]);