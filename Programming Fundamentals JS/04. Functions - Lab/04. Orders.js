function orders(product, productCount) {
    let sum = 0;

    switch (product) {
        case 'coffee': sum = productCount * 1.50;break;
        case 'coke': sum = productCount * 1.40;break;
        case 'water': sum = productCount * 1.00;break;
        case 'snacks': sum = productCount * 2.00;break;
    }

    console.log(sum.toFixed(2));
    
}
orders("water", 5);