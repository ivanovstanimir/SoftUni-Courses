function login(input) {
    let username = input[0];

    let password = "";
    let wrong = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    let index = 1;
    let command = input[index];
    index++;

    while (command != password) {
        wrong++;
        if (wrong == 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log("Incorrect password. Try again.");

        command = input[index];
        index++;
    }

    if (command == password) {
        console.log(`User ${username} logged in.`);
    }

}
login(['Acer', 'login', 'go', 'let me in', 'recA']);