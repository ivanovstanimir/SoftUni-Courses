function shoppingList(arr) {
    let groceries = arr.shift().split('!');
    let index = 0;
    let text = arr[index];

    while (text !== 'Go Shopping!') {
        let tokens = text.split(' ');
        let command = tokens[0];
        if (command === 'Urgent') {
            let item = tokens[1];
            if (!groceries.includes(item)) {
                groceries.unshift(item);
            }
        } else if (command == 'Unnecessary') {
            let item = tokens[1];
            let itemIndex = groceries.indexOf(item);
            if (itemIndex !== -1) {
                groceries.splice(itemIndex, 1);
            }
        } else if (command === 'Correct') {
            let oldItem = tokens[1];
            let newItem = tokens[2];
            let itemIndex = groceries.indexOf(oldItem);
            if (itemIndex !== -1) {
                groceries.splice(itemIndex, 1, newItem);
            }
        } else if (command === 'Rearrange') {
            let item = tokens[1];
            let itemIndex = groceries.indexOf(item);
            if (itemIndex !== -1) {
                let removedItem = groceries.splice(itemIndex, 1)[0];
                groceries.push(removedItem);
            }
        }

        index++;
        text = arr[index];
    }
    
    console.log(groceries.join(', '));
}
shoppingList(["Tomatoes!Potatoes!Bread",

    "Unnecessary Milk",
    
    "Urgent Tomatoes",

    "Correct Bread Onion",

    "Rearrange Tomatoes",
    
    "Go Shopping!"]);