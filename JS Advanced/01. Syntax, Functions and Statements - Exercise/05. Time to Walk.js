function timeToWalk(steps, footPrint, speed) {
    let deistance = steps * footPrint;
    let speedConvert = speed * (1000 / 3600);
    let rest = Math.floor((deistance / 500)) * 60;
    let time = (deistance / speedConvert) + rest;

    let hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    let seconds = (time % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.60, 5);