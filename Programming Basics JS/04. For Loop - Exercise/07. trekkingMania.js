function trekkingMania(input) {
    let groupCount = Number(input[0]);

    let totalClimbers = 0;
    let top1 = 0;
    let top2 = 0;
    let top3 = 0;
    let top4 = 0;
    let top5 = 0;

    for (let i = 1; i < groupCount + 1; i++) {
        let curIndex = Number(input[i]);
        totalClimbers += curIndex;
    }

    for (let i = 1; i < groupCount + 1; i++) {
        let curIndex = Number(input[i]);

        if (curIndex <= 5) {
            top1 += curIndex;
        } else if (curIndex <= 12) {
            top2 += curIndex;
        } else if (curIndex <= 25) {
            top3 += curIndex;
        } else if (curIndex <= 40) {
            top4 += curIndex;
        } else if (curIndex > 40) {
            top5 += curIndex;
        }
    }

    let top1Percent = (top1 / totalClimbers) * 100;
    let top2Percent = (top2 / totalClimbers) * 100;
    let top3Percent = (top3 / totalClimbers) * 100;
    let top4Percent = (top4 / totalClimbers) * 100;
    let top5Percent = (top5 / totalClimbers) * 100;

    console.log(`${top1Percent.toFixed(2)}%`);
    console.log(`${top2Percent.toFixed(2)}%`);
    console.log(`${top3Percent.toFixed(2)}%`);
    console.log(`${top4Percent.toFixed(2)}%`);
    console.log(`${top5Percent.toFixed(2)}%`);

}
trekkingMania(["5", "25", "41", "31", "250", "6"]);
