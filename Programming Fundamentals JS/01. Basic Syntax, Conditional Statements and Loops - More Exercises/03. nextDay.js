function nextDay(years, month, day) {
    let newDate = new Date(years, month - 1, day + 1);

    let newYear = newDate.getFullYear();
    let newMonth = newDate.getMonth() + 1;
    let newDay = newDate.getDate();

    console.log(`${newYear}-${newMonth}-${newDay}`);

}
nextDay(2020, 3, 24);