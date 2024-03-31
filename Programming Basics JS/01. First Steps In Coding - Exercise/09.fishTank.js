function fishTank(input) {
    
let lengthCm = Number(input[0]);
let widthCm = Number(input[1]);
let heightCm = Number(input[2]);
let percentageCm = Number(input[3]);

let parallelepiped = lengthCm * widthCm * heightCm;
let percentageDecimal = percentageCm / 100;

let fishTank = parallelepiped - parallelepiped * percentageDecimal;
let fishTankLittre = fishTank / 1000;

console.log(fishTankLittre);
}
fishTank(["85", "75", "47", "17"]);