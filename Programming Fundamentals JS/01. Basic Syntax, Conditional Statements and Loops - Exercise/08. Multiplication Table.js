function multiplicationTable(num) {
    let sum = 0;
    for (let index = 1; index <= 10; index++) {
        sum = num * index;
        console.log(`${num} X ${index} = ${sum}`);
    }

}
multiplicationTable(5);