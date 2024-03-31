function shopping(inpun) {
    let budget = Number(inpun[0]);
    let gpuQty = Number(inpun[1]);
    let cpuQty = Number(inpun[2]);
    let ramQty = Number(inpun[3]);

    let gpuPricePerUnit = 250;
    let gpuPrice = gpuQty * gpuPricePerUnit;

    let cpuPricePerUnit = gpuPrice * 0.35;
    let cpuPrice = cpuQty * cpuPricePerUnit;

    let ramPricePerUnit = gpuPrice * 0.10;
    let ramPrice = ramQty * ramPricePerUnit;

    let sum = gpuPrice + cpuPrice + ramPrice;

    if (gpuQty > cpuQty) {
       let discount = sum * 0.15;
       sum = sum - discount;
    } else {
        sum = sum;
    }

    let difference = Math.abs(budget - sum);
    difference = difference.toFixed(2);
    
    if (budget >= sum) {
        console.log(`You have ${difference} leva left!`);
    } else {
        console.log(`Not enough money! You need ${difference} leva more!`);
    }

}
shopping(["900", "2", "1", "3"]);