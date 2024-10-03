function notify(message) {
  let divEl = document.getElementById('notification');
  divEl.textContent = message;
  divEl.style.display = 'block';

  divEl.addEventListener('click', (e) => {
    divEl.style.display = 'none';
  });
}