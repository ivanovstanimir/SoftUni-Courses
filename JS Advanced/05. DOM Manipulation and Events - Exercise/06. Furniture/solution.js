function solve() {
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(event) {
    let input = JSON.parse(document.querySelector('textarea').value);

    input.forEach(x => {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = x.img;
      td1.append(img);
      tr.append(td1);

      let td2 = document.createElement('td');
      let p = document.createElement('p');
      p.textContent = x.name;
      td2.append(p);
      tr.append(td2);

      let td3 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = Number(x.price);
      td3.append(p2);
      tr.append(td3);

      let td4 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = Number(x.decFactor);
      td4.append(p3);
      tr.append(td4);

      let td5 = document.createElement('td');
      let inputEl = document.createElement('input');
      inputEl.type = 'checkbox';
      td5.append(inputEl);
      tr.append(td5);
      document.querySelector('tbody').append(tr);
    });
  }

  function buy(event) {
    let checkboxes = Array.from(document.querySelectorAll('tbody input'))
      .filter(c => c.checked);
    let bought = [];
    let price = 0;
    let decoration = 0;

    checkboxes.forEach(x => {
      let parent = x.parentElement.parentElement;
      let data = Array.from(parent.querySelectorAll('p'));
      bought.push(data[0].textContent);
      price += Number(data[1].textContent);
      decoration += Number(data[2].textContent);
    });

    let output = document.querySelectorAll('textarea')[1];
    output.textContent += `Bought furniture: ${bought.join(', ')}\r\n`;
    output.textContent += `Total price: ${price.toFixed(2)}\r\n`;
    output.textContent += `Average decoration factor: ${decoration / checkboxes.length}`;
  }
}