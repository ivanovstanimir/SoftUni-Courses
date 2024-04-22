function distinctArray(arr) {
    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        let curNum = arr[index];
        if (!newArr.includes(curNum))
        newArr.push(curNum);
        }
    
        console.log(newArr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);