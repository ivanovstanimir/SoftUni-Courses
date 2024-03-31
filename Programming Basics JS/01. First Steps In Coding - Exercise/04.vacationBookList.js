function vacationBookList(input) {
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hoursNeeded = totalPages / pagesPerHour;
    let hoursPerDay = hoursNeeded / days;

console.log(hoursPerDay);
}
vacationBookList(["432", "15", "4"]);