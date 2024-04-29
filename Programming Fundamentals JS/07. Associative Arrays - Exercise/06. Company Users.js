function companyUsers(input) {
    let obj = {};

    for (let command of input) {
        let [company, id] = command.split(" -> ");

        if (!obj.hasOwnProperty(company)) {
            obj[company] = [];
        }

        obj[company].push(id);
    }

    let sortedCompanis = Object.entries(obj).sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (let [companyName, value] of sortedCompanis) {
        console.log(companyName);
        let set = new Set(value);
        for (let el of set) {
            console.log(`-- ${el}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);