function addItem() {
    let inputEl = document.getElementById('newItemText');
    let itemEl = document.getElementById('items');

    let newEl = document.createElement('li');
    itemEl.append(newEl);
    newEl.textContent = inputEl.value;
    inputEl.value = '';
    inputEl.focus();

    let deleteEl = document.createElement('a');
    deleteEl.textContent = '[Delete]';
    deleteEl.href = '#';
    newEl.append(deleteEl);
    deleteEl.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });
}