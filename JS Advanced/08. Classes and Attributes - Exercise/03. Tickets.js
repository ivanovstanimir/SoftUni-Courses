function tickets(input, criteria) {
    class Tickets {
        destination;
        price;
        status;

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    for (let line of input) {
        let [destination, price, status] = line.split('|');
        tickets.push(new Tickets(destination, price, status));
    }

    tickets.sort((a, b) => {
        if (criteria == 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (criteria == 'status') {
            return a.status.localeCompare(b.status);
        } else {
            return a.price - b.price;
        }
    })

    return tickets;
}
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);

// tickets(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'status'
// );