function numbersSequance(n, k) {
    let arr = [1];

    for (let index = 1; index < n; index++) {
        let lastK = arr.slice(-k);
        let sum = 0;
        for (let curNum of lastK) {
            sum += curNum;
        }
        arr.push(sum);
    }

    console.log(arr.join(' '));
}
numbersSequance(6, 3);