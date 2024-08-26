function solve() {
  let textElement = document.getElementById('text').value;
  let conventionElement = document.getElementById('naming-convention').value;
  let words = textElement.split(/(\s+)/).filter(x => x !== ' ');
  let result = '';

  if (conventionElement === 'Camel Case') {
    for (let index = 0; index < words.length; index++) {
      words[index] = words[index].toLowerCase();
      if (index !== 0) {
        words[index] = words[index][0].toUpperCase() + words[index].substring(1);
      }
    }

  } else if (conventionElement === 'Pascal Case') {
    for (let index = 0; index < words.length; index++) {
      words[index] = words[index].toLowerCase();
      words[index] = words[index][0].toUpperCase() + words[index].substring(1);
    }

  } else {
    return document.getElementById('result').textContent = 'Error!';
  }

  result = words.join('');
  document.getElementById('result').textContent = result;
}