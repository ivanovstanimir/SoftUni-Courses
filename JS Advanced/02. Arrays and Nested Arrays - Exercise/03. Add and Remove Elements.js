function addAndRemoveElements(arr) {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        let command = arr[index];
        if (command === 'add') {
            newArr.push(index + 1);
        } else if (command === 'remove') {
            newArr.pop();
        }
    }

    if (newArr.length > 0) {
        console.log(newArr.join('\n'));
    } else {
        console.log('Empty');
    }
}
addAndRemoveElements(['remove', 
    'remove', 
    'remove']);