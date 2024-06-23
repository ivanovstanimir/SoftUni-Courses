function guineaPig(arr) {
    let foodKg = Number(arr[0]);
    let hayKg = Number(arr[1]);
    let coverKg = Number(arr[2]);
    let weightKg = Number(arr[3]);
    let foodPerDay = 0.3;
    let puppyCover = weightKg / 3;
    let days = 30;
    for (let index = 1; index <= days; index++) {
        foodKg -= foodPerDay;
        if (index % 2 === 0) {
            hayKg = hayKg - (foodKg * 0.05);
        } 
        if (index % 3 === 0) {
            coverKg -= puppyCover;
        }
        if (foodKg < 0 || hayKg < 0 || coverKg < 0) {
            console.log('Merry must go to the pet store!');
            return;
        }
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`);
}
guineaPig(["10", 
    "5", 
    "5.2", 
    "1"]);