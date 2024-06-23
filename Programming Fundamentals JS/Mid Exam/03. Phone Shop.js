function phoneShop(input) {
    const phones = input[0].split(", ");
    const commands = input.slice(1);

    for (let command of commands) {
        if (command === "End") {
            break;
        }

        const phoneActions = command.split(" - ");
        const action = phoneActions[0];
        const phone = phoneActions[1];

        if (action === "Add") {
            if (!phones.includes(phone)) {
                phones.push(phone);
            }
        } else if (action === "Remove") {
            let index = phones.indexOf(phone);
            if (index !== -1) {
                phones.splice(index, 1);
            }
        } else if (action === "Bonus phone") {
            let [existingPhone, bonusPhone] = phone.split(":");
            let index = phones.indexOf(existingPhone);
            if (index !== -1) {
                phones.splice(index + 1, 0, bonusPhone);
            }
        } else if (action === "Last") {
            let index = phones.indexOf(phone);
            if (index !== -1) {
                phones.splice(index, 1);
                phones.push(phone);
            }
        }
    }

    console.log(phones.join(", "));
}

const input1 = ["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"];

const input2 = ["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"];

const input3 = ["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"];

phoneShop(input1);
phoneShop(input2);
phoneShop(input3);