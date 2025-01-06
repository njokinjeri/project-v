const emailInput = document.getElementById("email");
const emailForm = document.getElementById("emailForm");


function isEmailInput(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateEmailInput() {
    if (isEmailInput(emailInput.value)) {
        alert("Thank you for subscribing! Check your inbox for the latest updates.");
        return true;
    } else {
        alert ("Please enter a valid email address.");
        return false;
    }
}

function handleSubmit(event) {
    console.log("Submitted email:", emailInput.value);
    validateEmailInput()
}

emailForm.addEventListener('submit', handleSubmit);
