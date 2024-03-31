function grade(input) {
    const students = Number(input[0]);
    if (students < 1 || students > 1000) {
        console.log("The students in the exam must be between 1 and 5000");
        return;
    }

    input.shift(); //removes the students number and leaves only the grades

    let fiveToSixGrade = 0;
    let fourToFiveGrade = 0;
    let threeToFourGrade = 0;
    let twoToThreeGrade = 0;
    let sumGrade = 0;

    for (let i = 0; i < input.length; i++) {
        let grade = Number(input[i]);
        sumGrade = sumGrade + grade;

        if (grade >= 5.00 && grade <= 6.00) {
            fiveToSixGrade++;
        }
        if (grade >= 4.00 && grade < 5.00) {
            fourToFiveGrade++;
        }
        if (grade >= 3.00 && grade < 4.00) {
            threeToFourGrade++;
        }
        if (grade >= 2.00 && grade < 3.00) {
            twoToThreeGrade++;
        }
    }

    const fiveToSixGradePercentage = ((fiveToSixGrade/students)*100).toFixed(2);
    const fourToFiveGradePercentage = ((fourToFiveGrade/students)*100).toFixed(2);;
    const threeToFourGradePercentage = ((threeToFourGrade/students)*100).toFixed(2);;
    const twoToThreeGradePercentage = ((twoToThreeGrade/students)*100).toFixed(2);;
    const averageGrade = (sumGrade / students).toFixed(2);

    console.log(`Top students: ${fiveToSixGradePercentage}%`);
    console.log(`Between 4.00 and 4.99: ${fourToFiveGradePercentage}%`);
    console.log(`Between 3.00 and 3.99: ${threeToFourGradePercentage}%`);
    console.log(`Fail: ${twoToThreeGradePercentage}%`);
    console.log(`Average: ${averageGrade}`);
}

grade(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"]);

grade(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"]);