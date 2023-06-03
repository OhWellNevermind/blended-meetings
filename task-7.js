function generateValidation(regex) {
    return (value) => {
        return regex.test(value);
    }
}

const nameValid = generateValidation(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u);
console.log(nameValid("Sofia"));
const phoneValid = generateValidation(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
console.log(phoneValid(+380956430234));
console.log(phoneValid(+380956430));
const emailValid = generateValidation(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
console.log(emailValid("test@gmail.com"));
console.log(emailValid("testgmail.com"));
console.log(emailValid("test@gmail.com"));
