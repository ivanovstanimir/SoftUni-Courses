function bonusScoringSystem(input) {
    let arr = input.map(Number);
    let totalStudents = arr.shift();
    let totalLectures = arr.shift();
    let bonusLectures = arr.shift();
    let maxBonus = 0;
    let maxAttendances = 0;

    for (let index = 1; index <= totalStudents; index++) {
        let attendances = arr.shift()
        let totalBonus = attendances / totalLectures * (5 + bonusLectures);
        if (maxBonus < totalBonus) {
            maxBonus = totalBonus;
            maxAttendances = attendances;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}
bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20']);