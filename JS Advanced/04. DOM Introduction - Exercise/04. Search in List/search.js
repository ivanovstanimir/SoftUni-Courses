function search() {
   let listElements = document.querySelectorAll('ul#towns li');
   let searchElement = document.getElementById("searchText").value;
   let result = document.getElementById('result');
   let matches = 0;

   for (let element of listElements) {
      element.style.fontWeight = 'normal';
      element.style.textDecoration = '';
   }

   for (let element of listElements) {
      let text = element.textContent;
      if (text.match(searchElement)) {
         matches++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }
   }

   result.textContent = `${matches} matches found`
}
