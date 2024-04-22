function firstAndLastKNumbers(arr) {
    let count = arr.shift();

    let result = arr.slice(0,count);
    let result2 = arr.slice(arr.length - count);

    console.log(result.join(' '));
    console.log(result2.join(' '));
    
}
firstAndLastKNumbers([2, 7, 8, 9]);