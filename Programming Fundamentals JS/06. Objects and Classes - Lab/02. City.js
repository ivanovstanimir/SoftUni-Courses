function city(info) {
    for (let key of Object.keys(info)) {
        console.log(`${key} -> ${info[key]}`);
    }
}
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})