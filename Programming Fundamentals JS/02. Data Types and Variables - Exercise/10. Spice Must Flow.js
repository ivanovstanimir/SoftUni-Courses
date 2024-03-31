function spiceMustFlow(curYield) {
    let consume = 26;
    let days = 0;
    let totalYieldPerDay = 0;
    let totalYield = 0;

    while (curYield >= 100) {
        days++;
        totalYieldPerDay = curYield - consume;
        totalYield += totalYieldPerDay;
        curYield -= 10;

    }

    if (totalYield >= consume) {
        totalYield -= consume;
    }

    console.log(days);
    console.log(totalYield);


}
spiceMustFlow(80);