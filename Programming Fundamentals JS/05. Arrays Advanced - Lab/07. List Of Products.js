function listOfProducts(input) {
    let sorted = input.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i< sorted.length; i++) {

        console.log(`${i + 1}.${sorted[i]}`);
    }

}
listOfProducts(['Watermelon', 'Banana', 'Apples']);