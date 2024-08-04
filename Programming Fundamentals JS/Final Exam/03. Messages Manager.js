function messagesManager(input) {
    const capacity = Number(input.shift());
    const users = {};

    for (const command of input) {
        if (command === "Statistics") {
            break;
        }

        const params = command.split('=');
        const action = params.shift();

        if (action === "Add") {
            const [username, sent, received] = params;
            if (!users[username]) {
                users[username] = {
                    sent: Number(sent),
                    received :Number(received)
                }
            }
        } else if (action === "Message") {
            const [sender, receiver] = params;
            if (!!users[sender] && !!users[receiver]) {
                users[sender].sent += 1;
                users[receiver].received += 1;

                if (users[sender].sent + users[sender].received >= capacity) {
                    console.log(`${sender} reached the capacity!`);
                    delete users[sender];
                }

                if (users[receiver].sent + users[receiver].received >= capacity) {
                    console.log(`${receiver} reached the capacity!`);
                    delete users[receiver];
                }
            }
        } else if (action === "Empty") {
            const [username] = params;
            if (username === "All") {
                for (const user in users) {
                    delete users[user];
                }
            } else {
                delete users[username];
            }
        }
    }

    console.log(`Users count: ${Object.keys(users).length}`);
    for (const username of Object.keys(users)) {
        const sent = users[username].sent;
        const received = users[username].received;
        console.log(`${username} - ${sent + received}`)
    }

}

const input1 = [
    "10",
    "Add=Berg=9=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Add=Mark=5=4",
    "Statistics"
];

const input2 = ["20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"
];

const input3 = ["12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"
];

messagesManager(input3);