function schoolGrades(arr) {
    let studens = {};

    for (let line of arr) {
        let info = line.split(" ");
        let name = info.shift();
        let grades = info.map(x => Number(x));

        if (!studens[name]) {
            studens[name] = grades;

        } else {
            studens[name] = studens[name].concat(grades);
        }
    }

    let kvp = Object.entries(studens);
    let sortedKvp = kvp.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (let [name, grade] of kvp) {
        let sum = 0;

        for (let currentGrade of grade) {
            sum += currentGrade;
        }

        let averageGrade = sum / grade.length;
        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);