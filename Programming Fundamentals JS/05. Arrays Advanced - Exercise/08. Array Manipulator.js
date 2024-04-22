function arrayManipulator(nums, arr) {
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index].split(" ");
        let command = element[0];

        if (command === "add") {
            nums.splice(Number(element[1]), 0, Number(element[2]));

        } else if (command === "addMany") {
            let sequence = element.slice(2).reverse();
            for (let j = 0; j < sequence.length; j++) {
                let curNum = Number(sequence[j]);
                nums.splice(Number(element[1]), 0, curNum);
            }

        } else if (command === "contains") {
            if (nums.includes(Number(element[1]))) {
                let i = nums.indexOf(Number(element[1]));
                console.log(i);
            } else {
                console.log(-1);
            }

        } else if (command === "remove") {
            nums.splice(Number(element[1]), 1);

        } else if (command === "shift") {
            let rotations = Number(element[1]);
            for (let curRotation = 1; curRotation <= rotations; curRotation++) {
                let firstEl = nums.shift();
                nums.push(firstEl);
            }

        } else if (command === "sumPairs") {
            let newArr = [];
            while (nums.length > 0) {
                let sum = 0;
                if (nums.length > 1) {
                    let a = nums.shift();
                    let b = nums.shift();
                    sum = a + b;
                    newArr.push(sum);
                } else {
                    let c = nums.shift();
                    newArr.push(c);
                }
            }
            nums = newArr;

        } else if (command === "print") {
            console.log(`[ ${nums.join(", ")} ]`);
            break;

        }
    }
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'sumPairs', 'print']);