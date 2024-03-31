function radinToDegree(input) {
    let radian = Number(input[0]);
    let degree = radian * 180 / Math.PI;
    console.log(degree);
}
radinToDegree(["6.2832"]);