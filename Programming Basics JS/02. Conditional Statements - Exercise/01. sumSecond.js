function sunSecond(input) {
    let competitor1Sec =Number(input[0]);
    let competitor2Sec =Number(input[1]);
    let competitor3Sec =Number(input[2]);

    let totalTime = competitor1Sec + competitor2Sec + competitor3Sec;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}
sunSecond(["14", "12", "10"]);
