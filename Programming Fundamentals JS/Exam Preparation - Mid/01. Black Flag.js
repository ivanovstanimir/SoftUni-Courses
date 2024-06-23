function blackFlag(arr) {

    let plunderDays = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);
    let sum = 0;

    for (let index = 1; index <= plunderDays; index++) {
        sum += dailyPlunder;
        if (index % 3 === 0) {
            sum += dailyPlunder * 0.5;
        }
        if (index % 5 === 0) {
            sum *= 0.7;
        }
    }
    if (sum >= expectedPlunder) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (sum / expectedPlunder) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["10", "20", "380"]);