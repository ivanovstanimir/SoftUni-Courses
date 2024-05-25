function addAndRemove(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentChar = arr[i];
        if (currentChar === 'add') {
            result.push(i + 1);

        } else if (currentChar === 'remove') {
            result.pop();
        }

    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
    
}
addAndRemove(['remove', 'remove', 'remove']);