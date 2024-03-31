function printNumber(input) {
    const n = Number(input[0]);
    let found = false;

    for (let a = 1; a < 10; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c < 10; c ++) {
                for (let d = 9; d >= c; d--) {
                    let sum = a + b + c + d;
                    let multi = a * b * c * d;

                    if (sum == multi && n % 10 == 5) {
                        console.log('' + a + b + c + d);
                        found = true;
                        break;
                    }

                    if (multi / sum >= 3 && multi / sum < 4 && n % 3 == 0) {
                        console.log('' + d + c + b + a);
                        found = true;
                        break;
                    }
                }
                if (found) {
                    break;
                }
            }
            if (found) {
                break;
            }
        }
        if (found) {
            break;
        }
    }

    if (!found) {
        console.log ("Nothing found");
    }
}

printNumber(["123"])
printNumber(["145"])
printNumber(["214"])