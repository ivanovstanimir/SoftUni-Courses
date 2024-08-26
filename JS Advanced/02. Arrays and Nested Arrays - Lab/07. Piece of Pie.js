function pieceOfPie(arr, str1, str2) {
    const arrLength = arr.length;
    const newArr = [];

    let index1 = arr.indexOf(str1);
    let index2 = arr.indexOf(str2);

    for (let j = index1; j <= index2; j++) {
        newArr.push(arr[j]);
    }

    return newArr;
}
let result = pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie');

console.log(result);
