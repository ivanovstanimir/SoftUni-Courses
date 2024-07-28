function fancyBarcodes(arr) {
    let count = arr.shift();
    let pattern = /@#+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

    for (let index = 0; index < count; index++) {
        let text = arr[index];
        let match = text.match(pattern);
        if (match) {
            let currentMatch = match.groups.barcode;
            let concat = '';
            for (let j = 0; j < currentMatch.length; j++) {
                let element = currentMatch[j];
                if (!isNaN(element)) {
                    concat += element;
                }
            }
            if (concat.length === 0) {
                concat = '00';
            }
            console.log(`Product group: ${concat}`);

        } else {
            console.log('Invalid barcode');
        }
    }
}
let input1 = ["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"];

let input2 = ["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"];

fancyBarcodes(input2);