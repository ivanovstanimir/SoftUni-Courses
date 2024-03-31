//Пилешко меню – 10.35 лв.

//Меню с риба – 12.40 лв.

//Вегетарианско меню – 8.15 лв. 


function foodDelivery(input) {
  
    let chickenMenusQty = Number(input[0]);
    let fishMenusQty = Number(input[1]); 
    let vegetarianMenusQty = Number(input[2]);
  
    let totalChickenMenusQty = chickenMenusQty * 10.35;
    let totalFishMenusQty = fishMenusQty * 12.40;
    let totalVegetarianMenusQty = vegetarianMenusQty * 8.15;
  
    let takeawayFood = totalChickenMenusQty + totalFishMenusQty + totalVegetarianMenusQty;
    let dessert = takeawayFood * 0.20;
    let totalSum = takeawayFood + dessert + 2.50;
    console.log(totalSum);
    }
  foodDelivery(["2", "4", "3"]);