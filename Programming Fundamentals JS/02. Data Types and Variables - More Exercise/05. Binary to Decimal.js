function binaryToDecimal(bimaryNum) {
    
    let power = bimaryNum.length - 1;
    let sum = 0;
    
    for (let index = 0; index < bimaryNum.length; index++) {
        let curNum = Number(bimaryNum[index]);
        sum += curNum * Math.pow(2, power);

        power--;
    }

    console.log(sum);

}

binaryToDecimal("11110000");