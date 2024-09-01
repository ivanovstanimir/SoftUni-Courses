function deleteByEmail() {
    let inputEl = document.querySelector('input[name="email"]');
    let result = document.querySelector('#result');
    let emailEl = document.querySelectorAll('tr td:nth-child(2)');

    let emails = Array.from(emailEl);
    let targetEl = emails.find(email => email.textContent === inputEl.value);

    if (targetEl) {
        targetEl.parentElement.remove();
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
    inputEl.value = '';
}