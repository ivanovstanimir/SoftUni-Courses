function reverseInPlace(arr) {

    //     arr.reverse();
    //     console.log(arr.join(' '));

    // }

    // --------------------------------------------------

    //     let result = '';

    //     for (let i = arr.length - 1; i >= 0; i--) {
    //         result += arr[i];
    //         if (i < arr.length) {
    //             result += ' ';
    //         }

    //     }


    //     console.log(result);
    // }

    for (let i = 0; i < arr.length / 2; i++) {
        let curChar = arr[i];

        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = curChar;
    }

    console.log(arr.join(' '));


}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);