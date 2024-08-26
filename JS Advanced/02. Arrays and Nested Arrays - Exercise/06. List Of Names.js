function listOfNames(arr) {
    let sorted = arr.sort((a, b) => a.localeCompare(b));
    let num = 1;
    sorted.forEach(name => {
        console.log(`${num}.${name}`);
        num++;
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"]);