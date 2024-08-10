function fruit(fruit, weight, price) {
    let weightInKilo = weight / 1000;
    let sum = weightInKilo * price;

    console.log(`I need $${sum.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80);