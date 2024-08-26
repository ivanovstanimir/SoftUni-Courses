function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputArr = JSON.parse(document.querySelector('#inputs textarea').value);

      let avgSalary = 0;
      let totalSalary = 0;
      let bestAvgSalary = 0;
      let bestName = '';
      let output = {};

      for (let element of inputArr) {
         let textInfo = element.split(' - ');
         let restaurantName = textInfo.shift();
         let strTextInfo = textInfo.shift();
         let workersInfo = strTextInfo.split(', ');
         for (let el of workersInfo) {
            let arrEl = el.split(' ');
            let name = arrEl.shift();
            let salary = Number(arrEl.shift());
            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            }
            if (output.hasOwnProperty(restaurantName)) {
               output[restaurantName][name] = salary;
            }
         }
      }

      let entries = Object.entries(output);
      for (let entrie of entries) {
         let key = entrie[0];
         let values = Object.entries(entrie[1]);
         for (let [name, salary] of values) {
            totalSalary += salary;
         }
         avgSalary = totalSalary / values.length;

         if (avgSalary > bestAvgSalary) {
            bestAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }
      }

      let print = '';
      let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);

      result.forEach(info => {
         print += `Name: ${info[0]} With Salary: ${info[1]} `;
      });

      document.querySelector('#bestRestaurant p')
         .textContent = `Name: ${bestName} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;

      document.querySelector('#workers p')
         .textContent = print;
   }
}