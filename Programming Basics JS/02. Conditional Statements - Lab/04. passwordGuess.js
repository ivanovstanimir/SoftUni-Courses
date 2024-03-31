function passwordGuess(input) {
    let passWord = input[0];

    if (passWord === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");

    } else {
        console.log("Wrong password!");
    }


}
passwordGuess(["qwerty"]);