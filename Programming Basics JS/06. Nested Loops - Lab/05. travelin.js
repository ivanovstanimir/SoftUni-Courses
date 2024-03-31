function travelin(input) {

    let index = 0;
    let command = input[index];

    while (command !== "End") {
        let destination = command;
        index++;
        let budget = Number(input[index]);
        let sum = 0;
        index++;


        while (sum < budget) {
            let money = Number(input[index]);
            sum += money;
            index++
        }
        if (sum >= budget) {
            console.log(`Going to ${destination}!`);
        }
        command = input[index];
        
    }

}
travelin(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);
