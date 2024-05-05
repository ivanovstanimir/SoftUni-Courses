function cutAndReverse(string) {
    let leftStr = '';
    let rightStr = '';

    let middleIndex = string.length / 2;
    let left = string.slice(0, middleIndex);
    let right = string.slice(middleIndex);


    for (let index = left.length - 1; index >= 0; index--) {
        let element = left[index];
        leftStr += element;
    }

    for (let index = right.length - 1; index >= 0; index--) {
        let element = right[index];
        rightStr += element;
    }

    console.log(leftStr);
    console.log(rightStr);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');