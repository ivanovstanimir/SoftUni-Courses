function loadingBar(num) {
    if (num == 100) {
        console.log("100% Complete!");
    } else {
        let percent = num / 10;
        let points = 10 - percent;
        let str1 = "";
        let str2 = "";

        for (let index = 1; index <= percent; index++) {
            str1 += "%";

        }

        for (let index = 1; index <= points; index++) {
            str2 += "."

        }

        console.log(`${num}% [${str1}${str2}]`);
        console.log("Still loading...");
    }

}
loadingBar(0);