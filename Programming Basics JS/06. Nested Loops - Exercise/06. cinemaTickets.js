function cinemaTickets(input) {
    let totalStudentTickets = 0;
    let totalStandartTickets = 0;
    let totalKidsTickets = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Finish") {
        let movieName = command;
        let studentTickets = 0;
        let standardTickets = 0;
        let kidsTickets = 0;

        let freeSeats = Number(input[index]);
        index++;
        let secondCommand = input[index];
        index++;

        while (secondCommand !== "End") {
            let ticketsKind = secondCommand;

            if (ticketsKind === "student") {
                studentTickets++;
            }

            if (ticketsKind === "standard") {
                standardTickets++;
            }
            if (ticketsKind === "kid") {
                kidsTickets++;
            }

            let curTickets = studentTickets + standardTickets + kidsTickets;

            if (curTickets === freeSeats) {
                break;
            }

            secondCommand = input[index];
            index++;
        }

        totalStudentTickets += studentTickets;
        totalStandartTickets += standardTickets;
        totalKidsTickets += kidsTickets;

        let tickets = studentTickets + standardTickets + kidsTickets;
        let percent = (tickets / freeSeats) * 100;
        console.log(`${movieName} - ${percent.toFixed(2)}% full.`);

        command = input[index];
        index++;

    }

    let totalTickets = totalStudentTickets + totalStandartTickets + totalKidsTickets;
    let percentStudTickets = (totalStudentTickets / totalTickets) * 100;
    let percentStandTickets = (totalStandartTickets / totalTickets) * 100;
    let percentKidsTickets = (totalKidsTickets / totalTickets) * 100;
    if (command === "Finish") {
        console.log(`Total tickets: ${totalTickets}`);
        console.log(`${percentStudTickets.toFixed(2)}% student tickets.`);
        console.log(`${percentStandTickets.toFixed(2)}% standard tickets.`);
        console.log(`${percentKidsTickets.toFixed(2)}% kids tickets.`);
    }

}
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"]);

