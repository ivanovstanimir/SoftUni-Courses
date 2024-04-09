function palindromeIntegers(array) {
    for (let currentNum of array) {
        let currentString = String(currentNum);
        let isPalindrome = currentNumCheck(currentString);
        console.log(isPalindrome);
    }

    function currentNumCheck(str) {
        let reverse = '';
        for (let index = str.length - 1; index >= 0; index--) {
            let currentChar = str[index];
            reverse += currentChar;
        }

        let isTrue = str == reverse;
        return isTrue;
    }
}
palindromeIntegers([123, 323, 421, 121]);
