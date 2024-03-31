function printAndSum(startNum, endNum) {
    let sum = 0;
    let strNum = "";
    for (let index = startNum; index <= endNum; index++) {
        strNum += index + " ";
        sum += index;
    }

    console.log(strNum);
    console.log(`Sum: ${sum}`);
    
}
printAndSum(50, 60);