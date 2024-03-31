//Цената на един кв. м. е 7.61 лв със ДДС. 
//Понеже нейният двор е доста голям, фирмата изпълнител предлага 18% отстъпка от крайната цена.


function yardGreening(input) {
    let sqMeters = Number(input[0]);

    let sum = sqMeters * 7.61;
    let discount = sum * 0.18;
    let finalSum = sum - discount;

    console.log(`The final price is: ${finalSum} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
yardGreening(["550"]);