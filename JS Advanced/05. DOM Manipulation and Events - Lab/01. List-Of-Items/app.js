function addItem() {
    let itemEl = document.getElementById('items');
    let inputEl = document.getElementById('newItemText');

    let newEl = document.createElement('li');
    itemEl.append(newEl);
    newEl.textContent = inputEl.value;

    inputEl.value = '';
    inputEl.focus();
}