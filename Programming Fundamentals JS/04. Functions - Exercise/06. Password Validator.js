function passwordValidator(pass) {
    let check1 = checkLength(pass);
    let check2 = checkLettersAndDigits(pass);
    let check3 = checkForDigits(pass);

    if (check1 && check2 && check3) {
        console.log('Password is valid');
    }

    function checkLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log('Password must be between 6 and 10 characters');
            return false;
        }
    }

    function checkLettersAndDigits(pass) {
        for (let currentChar of pass) {
            let ascii = currentChar.charCodeAt();
            if (
                !((ascii >= 48 && ascii <= 57) ||
                (ascii >= 65 && ascii <= 90) ||
                (ascii >= 97 && ascii <= 122))
            ) {
                console.log('Password must consist only of letters and digits');
                return false;
            }
        }
        return true;
    }


    function checkForDigits(pass) {
        let count = 0;
        for (let currentChar of pass) {
            let ascii = currentChar.charCodeAt();
            if (ascii >= 48 && ascii <= 57) {
                count++;
            }
        }

        if (count >= 2) {
            return true;
        } else {
            console.log('Password must have at least 2 digits');
            return false;
        }
    }
}

passwordValidator('logIn');
