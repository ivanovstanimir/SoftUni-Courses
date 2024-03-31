function oldBooks(input) {
    let booksearch = input[0];

    let bookCount = 0;

    let index = 1;
    let commands = input[index];
    index++;

    while (commands !== "No More Books") {
        if (commands === booksearch) {
            console.log(`You checked ${bookCount} books and found it.`);
            break;
        }
        bookCount++;
        commands = input[index];
        index++
    }

    if (commands === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCount} books.`);
    }
    
}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"]);