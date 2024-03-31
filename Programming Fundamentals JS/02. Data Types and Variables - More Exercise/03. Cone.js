function cone(r, h) {

    let b = Math.PI * (r ** 2);
    let v = (b * h) / 3;
    let l = Math.sqrt(h ** 2 + r ** 2)
    let s = Math.PI * r * l;
    let s1 = b + s;

    console.log(`volume = ${v.toFixed(4)}`);
    console.log(`area = ${s1.toFixed(4)}`);

}
cone(3, 5);