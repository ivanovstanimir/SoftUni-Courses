function examPreparation(input) {
    let badGradesCount = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let badGrade = 0;
    let gradeCount = 0;
    let gradeSum = 0;
    let averageGrade = 0;
    let lastProblem = "";

    while (command !== "Enough") {
        lastProblem = command;
        if (grade <= 4) {
            badGrade++;
        }
        if (badGrade === badGradesCount) {
            console.log(`You need a break, ${badGrade} poor grades.`);
            break;
        }
        gradeSum += grade;
        gradeCount++;

        command = input[index];
        index++;
        grade = Number(input[index]);
        index++;
    }

    if (command === "Enough") {
        averageGrade = gradeSum / gradeCount;
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"]);