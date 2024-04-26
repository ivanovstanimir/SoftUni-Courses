function employees(arr) {
    for (let index = 0; index < arr.length; index++) {
        let name = arr[index];
        let count = 0;
        for (let j = 0; j < name.length; j++) {
            count++;
        }

        let info = {
            currentname: name,
            personalNumber: count
        }

        console.log(`Name: ${info.currentname} -- Personal Number: ${info.personalNumber}`);
    }
}
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);