function validate() {
    let inputEl = document.getElementById('email');
    let pattern = new RegExp('^[a-z]+@[a-z]+\\.[a-z]+');

    inputEl.addEventListener('change', (e) => {
        if (pattern.test(inputEl.value)) {
            inputEl.classList.remove('error');
        } else {
            inputEl.classList.add('error');
        }
    })
}