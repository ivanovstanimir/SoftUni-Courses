function addressBook(arr) {
    let addressBook = {};

    for (let el of arr) {
        let [name, address] = el.split(":");
        addressBook[name] = address;
    }

    let newArr = Object.entries(addressBook);
    newArr.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of newArr) {
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);