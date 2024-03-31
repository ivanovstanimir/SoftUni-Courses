function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    let numString = String(sum);
    let isfloat = false;

    for (let index = 0; index < numString.length; index++) {
        let curIndex = numString[index];

        if (curIndex == ".") {
            isfloat = true;
        }

    }
    
    console.log(`${sum} - ${isfloat ? "Float" : "Integer"}`);

}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);