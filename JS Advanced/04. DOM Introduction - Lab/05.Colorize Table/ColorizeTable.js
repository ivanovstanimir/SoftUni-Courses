function colorize() {
    let evenElements = document.querySelectorAll('table tr:nth-child(even)');
    for (const element of evenElements) {
        element.style.backgroundColor = 'teal';
    }
}