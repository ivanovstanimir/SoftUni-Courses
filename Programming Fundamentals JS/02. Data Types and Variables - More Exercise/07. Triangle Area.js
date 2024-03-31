function triangleArea(a, b, c) {
    let p = (a + b + c) / 2;
    let d = p - a;
    let e = p - b;
    let f = p - c;

    let s = Math.sqrt(p * d * e * f)

    console.log(s);

}
triangleArea(2, 3.5, 4);