function sumTable() {
    let priceTdElements = document.querySelectorAll('table tr td:nth-of-type(2):not(#sum)');
    let sumIdElement = document.getElementById('sum');
    let sum = 0;
    for (const element of priceTdElements) {
        let num = Number(element.textContent);
        sum += num;
    }

    sumIdElement.textContent = sum;
}