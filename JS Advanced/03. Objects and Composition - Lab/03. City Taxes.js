function cityTaxes(name, population, treasury) {
    let obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            percentage /= 100;
            this.population += Math.floor(this.population * percentage);
        },
        applyRecession(percentage) {
            percentage /= 100;
            this.treasury -= Math.floor(this.treasury * percentage);
        }
    };

    return obj;
}
const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);

