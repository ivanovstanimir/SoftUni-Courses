function extractText() {
    let liElement = document.querySelectorAll('li');
    let arrLi = Array.from(liElement).map(el => el.textContent);
    let textAreaItems = document.getElementById('result');
    textAreaItems.value = arrLi.join('\n');
}