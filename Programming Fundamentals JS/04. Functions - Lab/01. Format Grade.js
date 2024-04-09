function formatGrade(grade) {
    let result = '';
    let isFail = false;

    if (grade < 3) {
        isFail = true;
        result = "Fail"
        grade = 2;

    } else if (grade < 3.50) {
        result = "Poor";

    } else if (grade < 4.50) {
        result = "Good";

    } else if (grade < 5.50) {
        result = "Very good";

    } else {
        result = "Excellent"
    }

    if (isFail) {
        console.log(`${result} (${grade})`);

    } else {
        console.log(`${result} (${grade.toFixed(2)})`);
    }
}   
formatGrade(5);