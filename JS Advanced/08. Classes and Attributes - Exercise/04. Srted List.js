class List {
    collection;
    size;

    constructor() {
        this.collection = [];
        this.size = 0;
    }

    add(element) {
        this.collection.push(element);
        this.collection.sort((a, b) => a - b);
        this.size++;
        // return this.collection;
    }

    remove(index) {

        if (index >= 0 && index < this.collection.length) {
            this.collection.splice(index, 1);
            this.size--;
            // return this.collection;

        } else {
            throw new RangeError("Invalid index!");
        }
    }

    get(index) {

        if (index >= 0 && index < this.collection.length) {
            return this.collection[index];

        } else {
            throw new RangeError("Invalid index!");
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
