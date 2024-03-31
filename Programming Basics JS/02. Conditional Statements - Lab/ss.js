function ss(input) {
    
    let usdQty = parseFloat(input[0]); 
    let bgnQty = parseFloat(input[1]);


    let usd = 1.79549;
    let eur = 1.95583;

    let sumBgn = usdQty * usd;
    let sumEur = bgnQty / eur;

    console.log(sumBgn.toFixed(2));
    console.log(sumEur.toFixed(2));
    

}
ss(["20", "100"]);