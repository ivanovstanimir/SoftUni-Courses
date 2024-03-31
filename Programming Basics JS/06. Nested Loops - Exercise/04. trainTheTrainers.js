function trainTheTrainers(input) {
    let jury = Number(input[0]);

    let totalGradeCount = 0;
    let totalGradeSum = 0;

    let index = 1;
    let command = input[index];
    index++;

    while (command !== "Finish") {
        let gradeSum = 0;
        for (let curGrade = 1; curGrade <= jury; curGrade++) {
            let grade = Number(input[index]);
            gradeSum += grade;
            index++;
        }

        let averagePresentationgrade = gradeSum / jury;
        console.log(`${command} - ${averagePresentationgrade.toFixed(2)}.`);
        
        totalGradeSum += averagePresentationgrade;
        totalGradeCount++;

        command = input[index];
        index++;
    }

    let averageGrade = totalGradeSum / totalGradeCount;
    console.log(`Student's final assessment is ${averageGrade.toFixed(2)}.`);

}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"]);