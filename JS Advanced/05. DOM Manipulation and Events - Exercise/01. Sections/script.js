function create(words) {
   let divElement = document.getElementById('content');

   for (let word of words) {
      let newDivElement = document.createElement('div');
      let newPElement = document.createElement('p');
      newPElement.textContent = word;
      newPElement.style.display = 'none';
      newDivElement.append(newPElement);
      newDivElement.addEventListener('click', (e) => {
         e.currentTarget.children[0].style.display = 'block';
      })

      divElement.append(newDivElement);
   }
}