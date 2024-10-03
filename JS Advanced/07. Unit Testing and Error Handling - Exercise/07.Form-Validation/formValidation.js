function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const companyNumber = document.getElementById('companyNumber');
    const company = document.getElementById('company');
    const errFields = [];

    company.addEventListener('change', () => {
        document.getElementById('companyInfo').style.display =
            company.checked ? 'block' : 'none';
    });

    document.getElementById('submit')
        .addEventListener('click', validateFields)

    function isCorrectUserName(username) {
        let userNamePattern = /^[a-zA-Z0-9]{3,20}$/gm;
        return userNamePattern.test(username);
    }

    function isCorrectEmail(email) {
        const emailPattern = /^\w+@\w*\.+/;
        return emailPattern.test(email);
    }

    function isCorrectPassword(password) {
        let regExp = /^\w{5,15}$/;
        return regExp.test(password) && password.localeCompare(confirmPassword.value) === 0;
    }

    function isCorrectCompanyInfo(companyNumber) {
        let regExp = /^[0-9]{4}$/;
        return regExp.test(companyNumber);
    }

    function validateFields(ev) {
        ev.preventDefault();

        if (!isCorrectUserName(username.value)) {
            errFields.push(username);
        }

        if (!isCorrectEmail(email.value)) {
            errFields.push(email);
        }

        if (!isCorrectPassword(password.value) || password.value !== confirmPassword.value) {
            errFields.push(password);
            errFields.push(confirmPassword);
        }

        if (company.checked) {
            if (!isCorrectCompanyInfo(companyNumber.value)) {
                errFields.push(companyNumber);
            }
        }

        errFields.forEach(field => field.style.borderColor = 'red');

        document.getElementById('valid').style.display =
            errFields.length ? 'none' : 'block';
    }
}

// function validate() {
//     document.getElementById('company').addEventListener('click', () => {
//         let companyInfo = document.getElementById('companyInfo');
//         if (document.getElementById('company').checked == true) {
//             companyInfo.style.display = 'block';
//         } else {
//             companyInfo.style.display = 'none';
//         }
//     })

//     document.getElementById('submit').addEventListener('click', onClick);

//     function onClick(e) {
//         e.preventDefault();

//         let invalidFields = [];
//         let checkbox = document.getElementById('company');
//         let userName = document.getElementById('username');
//         let userNamePattern = /^[A-Za-z0-9]{3,20}$/;

//         if (!userNamePattern.test(userName.value)) {
//             invalidFields.push(userName);
//         }

//         let email = document.getElementById('email');
//         let emailPattern = /^[^@.]+@[^@]*\.[^@]+$/;

//         if (!emailPattern.test(email.value)) {
//             invalidFields.push(email);
//         }

//         let password = document.getElementById('password');
//         let confirmPassword = document.getElementById('confirm-password');
//         let passPattern = /^[\w]{5,15}$/;

//         if (!(passPattern.test(password.value) || passPattern.test(confirmPassword.value))) {
//             invalidFields.push(password);
//             invalidFields.push(confirmPassword);
//         }

//         if (checkbox.checked) {
//             let companyId = document.getElementById('companyNumber');
//             let companyPattern = /^[0-9]{4}$/;

//             if (!companyPattern.test(companyId.value)) {
//                 invalidFields.push(companyId);
//             }
//         }

//         invalidFields.forEach(fields => {
//             fields.style.borderColor = 'red';
//             !invalidFields.length ? document.getElementById('valid').style.display = 'block' : 
//             document.getElementById('valid').style.display = 'none';
//         });
//     }
// }
