function sumNumbers(input) {
    let target = Number(input[0]);

    let sum = 0;
    let index = 1;
    let curNum = Number(input[index]);

    while (sum < target) {
        sum += curNum;
        index++;
        curNum = Number(input[index]);
    } console.log(sum);
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);