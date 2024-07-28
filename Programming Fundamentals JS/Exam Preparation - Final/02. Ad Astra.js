function adAstra(arr) {
    let pattern = /([# |])(?<foodName>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d{1,5})\1/g;
    let text = arr.shift();
    let matches = text.matchAll(pattern);
    let tatalCal = 0;

    for (let match of matches) {
        let currentCal = Number(match.groups.cal);
        tatalCal += currentCal;
    }

    let food = Math.floor(tatalCal / 2000);
    console.log(`You have food to last you for: ${food} days!`);

    let el = text.matchAll(pattern);
    for (let match of el) {
        console.log(`Item: ${match.groups.foodName}, Best before: ${match.groups.date}, Nutrition: ${match.groups.cal}`);
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);