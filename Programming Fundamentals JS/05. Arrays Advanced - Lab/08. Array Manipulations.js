function arrayManiplations(arr) {
    let numsAsString = arr.shift();
    let text = numsAsString.split(" ");
    let numsArr = text.map(Number);

    for (let index = 0; index < arr.length; index++) {
        let command = arr[index].split(" ");

        if (command[0] === "Add") {
            numsArr.push(Number(command[1]));

        } else if (command[0] === "Remove") {
            let removedNum = Number(command[1]);
            let currentArr = numsArr.filter(x => x !== removedNum);
            numsArr = currentArr;

        } else if (command[0] === "RemoveAt") {
            numsArr.splice(Number(command[1]), 1);

        } else if (command[0] === "Insert") {
            let num = Number(command[1]);
            let i = Number(command[2]);
            numsArr.splice(i, 0, num);
        }
    }

    console.log(numsArr.join(" "));
}
arrayManiplations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);