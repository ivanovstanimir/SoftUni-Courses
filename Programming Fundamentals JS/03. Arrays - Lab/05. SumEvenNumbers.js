function sumEvenNumbers(nums) {
  let sum = 0;

  for (let numStr of nums) {
         let num = Number(numStr);
         if (num % 2 == 0) {
            sum += num
         }
  }

  console.log(sum);
    
}
sumEvenNumbers(['1','2','3','4','5','6']);