function numbers(string) {
    let nums = string.split(' ').map(Number);
    let count = 0;
    let sum = 0;

    for (let index = 0; index < nums.length; index++) {
        let num = nums[index];
        sum += num;
        count++;
    }

    let average = sum / count;
    let filtered = nums.filter(n => n > average);
    if (filtered.length === 0) {
        console.log('No');
    } else {
        filtered.sort((a, b) => b - a);
        let top5Nums = filtered.slice(0, 5);
        console.log(top5Nums.join(' '));
    }
}
numbers('1');