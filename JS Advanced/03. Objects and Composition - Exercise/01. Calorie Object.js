function calorieObject(arr) {
    let obj = {};
    let length = arr.length;

    for (let index = 0; index < length; index += 2) {
        let product = arr[index];
        let cal = Number(arr[index + 1]);
        obj[product] = cal;
    }

    console.log(obj);
}
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);