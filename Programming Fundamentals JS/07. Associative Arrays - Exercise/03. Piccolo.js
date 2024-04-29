function piccolo(arr) {
    let set = new Set();

    for (let kvp of arr) {
        let [command, number] = kvp.split(", ");
        if (command === "IN") {
            set.add(number);

        } else if (command === "OUT") {
            set.delete(number);
        }
    }

    if (set.size === 0) {
        console.log("Parking Lot is Empty");

    } else {
        let arr = Array.from(set);
        let sortedNums = arr.sort((a, b) => a.localeCompare(b));

        for (let nums of sortedNums) {
            console.log(nums);
        }
    }
}
    piccolo(['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']);