function cats(arr) {
    class Cat {
        constructor(catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let index of arr) {
        let info = index.split(" ");
        let name = info[0];
        let age = Number(info[1]);

        let cat = new Cat(name, age);

        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);