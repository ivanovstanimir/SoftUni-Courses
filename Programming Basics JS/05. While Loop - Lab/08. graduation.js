function graduation(input) {
    let studentName = input[0];

    let grade = 0;
    let badGrade = 0;
    let sum = 0;

    let index = 1;
    let command = Number(input[index]);
    index++;

    while (command <= 12) {
        if (command >= 4) {
            sum += command;
            grade++;
        } else if (command < 4) {
            badGrade++;
            if (badGrade > 1) {
                console.log(`${studentName} has been excluded at ${grade + 1} grade`);
                break;
            }
        }
        if (grade === 12) {
            let averageGrade = sum / 12;
            console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
            break;
        }
        command = Number(input[index]);
        index++;
    }

}


graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"]);