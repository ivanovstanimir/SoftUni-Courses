function evenPositionElements(arr) {
    let arrLength = arr.length;
    let str = '';
    for (let index = 0; index < arrLength; index++) {
        let currentNum = arr[index];
        if (index % 2 === 0) {
            str += currentNum + ' ';
        }
    }

    console.log(str);
}
evenPositionElements(['20', '30', '40', '50', '60']);