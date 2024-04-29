function phoneBook(arr) {
    let phoneBook = {}
        for (let el of arr) {
            let token = el.split(" ");
            let name = token[0];
            let number = token[1];
            phoneBook[name] = number;
        }

        for(let key in phoneBook) {
            console.log(`${key} -> ${phoneBook[key]}`);
        }
    }
    phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);