

const form = document.querySelector("#form");
const successMessage = document.querySelector("#success-message");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

form.addEventListener("submit", validateForm);
form.addEventListener("submit", submitForm);


function submitForm(event) {
    event.preventDefault()

    if (checkLength(fullName.value, 4) && checkLength(subject.value, 14) && validateEmail(email.value) && checkLength(message.value, 24)) {
        successMessage.innerHTML = `<div class="success-message">Thank you!
                                Your message has been sent and I will get back to you shortly</div>`
        form.reset();
    }
}


function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 4)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }
    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (checkLength(subject.value, 14)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    if (checkLength(message.value, 24)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
