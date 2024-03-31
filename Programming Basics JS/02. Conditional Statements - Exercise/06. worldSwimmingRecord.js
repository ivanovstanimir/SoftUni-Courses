function worldSwimmingRecord(input) {
    let recordSec = Number(input[0]);
    let distanceMetter = Number(input[1]);
    let timeFor1MetterSec = Number(input[2]);

    let Time = distanceMetter * timeFor1MetterSec;
    let delay = distanceMetter / 15;
    delay = Math.floor(delay)
    let timePluResistance = delay * 12.5;
    

    let totalTime = Time + timePluResistance;
    let difference = Math.abs(recordSec - totalTime);

    if (totalTime < recordSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);

    } else {
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }

}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
