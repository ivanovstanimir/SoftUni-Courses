function movingTarget(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let index = 0;
    let text = arr[index];

    while (text !== 'End') {
        let tokens = text.split(' ');
        let command = tokens[0];
        if (command === 'Shoot') {
            let idx = Number(tokens[1]);
            let power = Number(tokens[2]);
            if (targets[idx]) {
                let target = targets[idx];
                if (target <= power) {
                    targets.splice(idx, 1);
                } else {
                    let redused = target - power;
                    targets.splice(idx, 1, redused);
                }
            }

        } else if (command === 'Add') {
            let idx = Number(tokens[1]);
            let value = Number(tokens[2]);
            if (targets[idx]) {
                targets.splice(idx, 0, value);

            } else {
                console.log('Invalid placement!');
            }

        } else if (command === 'Strike') {
            let idx = Number(tokens[1]);
            let radius = Number(tokens[2]);
            if (targets[idx - radius] && targets[idx + radius]) {
                targets.splice((idx - radius), (radius * 2) + 1);

            } else {
                console.log('Strike missed!');
            }
        }

        index++;
        text = arr[index];
    }

    console.log(targets.join('|'));
}
movingTarget(["52 74 23 44 96 110",

    "Shoot 5 10",

    "Shoot 1 80",

    "Strike 5 3",

    "Add 22 3",

    "End"]);