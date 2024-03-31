//една опаковка храна за кучета е на цена 2.50 лв

//опаковка храна за котки струва 4 лв.


function petShop(input) {
    let dogsFoodsQty = Number(input[0]);
    let catFoodsQty = Number(input[1]);

    let dogFoodPrice = dogsFoodsQty * 2.50;
    let catFoodPrice = catFoodsQty * 4;
    
    let sum = dogFoodPrice + catFoodPrice;

    console.log(`${sum} Lv.`);

}
petShop(["5", "4"]);