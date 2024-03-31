function requiredReading(pages, pagesPerHour, days) {
    let pegesPerDay = pages / days;
    let hoursPerDay = pegesPerDay / pagesPerHour;

    console.log(hoursPerDay);

}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);