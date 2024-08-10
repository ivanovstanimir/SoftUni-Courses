function daysInAMonth(month, year) {
    let newDate = new Date(year, month, 0).getDate();
    console.log(newDate);
}
daysInAMonth(1, 2012);