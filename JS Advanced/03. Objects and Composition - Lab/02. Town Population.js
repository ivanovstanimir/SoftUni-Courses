function townPopulation(arr) {
    const obj = {};
    for (let instruction of arr) {
        let text = instruction.split(' <-> ');
        let city = text.shift();
        let population = Number(text.shift());
        if (obj.hasOwnProperty(city)) {
            obj[city] += population;
        } else {
            obj[city] = population;
        }
    }

    for (let key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);