
// Пакет химикали - 5.80 лв.

// Пакет маркери - 7.20 лв.

// Препарат - 1.20 лв (за литър)


function studyMaterials(input) {
let pensQty = Number(input[0]);
let markersQty = Number(input[1]);
let clDetergentQty = Number(input[2]);
let prDiscount = Number(input[3]);  
let prDiscountDecimal = prDiscount / 100;

let totalPensQty = pensQty * 5.80;
let totalMarkersQty = markersQty * 7.20;
let totalClDetergenQty = clDetergentQty * 1.20;

let sum = totalPensQty + totalMarkersQty + totalClDetergenQty;
let finalSum = sum - (sum * prDiscountDecimal);

console.log(finalSum);

}
studyMaterials(["2", "3", "4", "25"]);