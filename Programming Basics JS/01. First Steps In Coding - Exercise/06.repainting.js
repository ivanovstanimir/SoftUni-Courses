//Предпазен найлон - 1.50 лв. за кв. метър

//Боя - 14.50 лв. за литър

//Разредител за боя - 5.00 лв. за литър



function repainting(input) {
  let nylonQty = Number(input[0]);
  let paintQty = Number(input[1]);
  let thinnerQty = Number(input[2]);
  let workHours = Number(input[3])

  let totalNylonQty = nylonQty + 2;

  let extraPaintQty = 0.1 * paintQty;
  let totalPaintQty = paintQty + extraPaintQty;

  let materialsPrice = (totalNylonQty * 1.50) + (totalPaintQty * 14.50) + (thinnerQty * 5.00) + 0.40;

  let payPerHours = 0.3 * materialsPrice;
  let totalWorkersPay = workHours * payPerHours;

  console.log(materialsPrice + totalWorkersPay);
}
repainting(["5", "10", "10", "1"]);