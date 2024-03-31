function  histogram(input) {
    let totalNumm = Number(input[0]);

    let range1 = 0;
    let range2 = 0;
    let range3 = 0;
    let range4 = 0;
    let range5 = 0;

    for (index = 1; index < totalNumm + 1; index++) {
        let curIndex = input[index];
        if (curIndex < 200) {
            range1++;
        } else if (curIndex < 400) {
            range2++;
        } else if (curIndex < 600) {
            range3++;
        } else if (curIndex < 800) {
            range4++;
        } else if (curIndex >= 800) {
            range5++;
        }
    }
    let range1Percent = (range1 / totalNumm) * 100;
    let range2Percent = (range2 / totalNumm) * 100;
    let range3Percent = (range3 / totalNumm) * 100;
    let range4Percent = (range4 / totalNumm) * 100;
    let range5Percent = (range5 / totalNumm) * 100;

    console.log(`${range1Percent.toFixed(2)}%`);
    console.log(`${range2Percent.toFixed(2)}%`);
    console.log(`${range3Percent.toFixed(2)}%`);
    console.log(`${range4Percent.toFixed(2)}%`);
    console.log(`${range5Percent.toFixed(2)}%`);

}
histogram(["3", "1", "2", "999"]);