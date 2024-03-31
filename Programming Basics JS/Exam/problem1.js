function excursion(input) {
    let peopleCount = Number(input[0]);
    let nightCount = Number(input[1]);
    let transportCardsCount = Number(input[2]);
    let ticketsCount = Number(input[3]);

    let night = nightCount * 20;
    let transportCard = transportCardsCount * 1.6;
    let tickets = ticketsCount * 6;

    let totalFor1Person = night + transportCard + tickets;
    let totalSum = peopleCount * totalFor1Person;
    let finalSum = totalSum * 1.25;

    console.log(finalSum.toFixed(2));

}
excursion(["20",
    "14",
    "30",
    "6"]);