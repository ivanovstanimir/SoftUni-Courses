function password(input) {
    let username = input[0];
    let password = input[1];
    let index = 2;
    let curWord = input[index];

    if (curWord === password) {
        console.log(`Welcome ${username}!`);
    }

    while (curWord !== password) {
        console.log(`Welcome ${username}!`);
        index++;
        curWord = input[index];
        break;
    }
}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"]);