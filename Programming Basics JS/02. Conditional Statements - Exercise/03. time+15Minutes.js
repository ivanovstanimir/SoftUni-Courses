function time15minutes(input) {

    let hour = Number(input[0]);
    let min = Number(input[1]);
    let totalTime = hour * 60 + min + 15;

    let newHour = Math.trunc(totalTime / 60);
    let newMin = totalTime % 60;

    if(newHour === 24) {
        newHour = 0;
    }

    if(newMin < 10) {
        console.log(`${newHour}:0${newMin}`);

    }else {
        console.log(`${newHour}:${newMin}`);
    }
}
time15minutes(["23", "59"]);