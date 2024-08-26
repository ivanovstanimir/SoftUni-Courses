function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let row = document.querySelectorAll('tbody tr');
   let input = document.getElementById('searchField');

   function onClick() {
      for (let element of row) {
         element.classList.remove('select');
         if (input.value !== '' && element.innerHTML.includes(input.value)) {
            element.className = 'select';
         }
      }
   }

   input.value = '';
}