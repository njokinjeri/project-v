const emailInput = document.getElementById('emailInput');
const feedbackElement = document.getElementById('emailFeedback');
const emailModal = document.getElementById('emailModal');
const closeModalButton = document.getElementById('closeModalButton');
const emailForm = document.getElementById('emailForm');


function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateEmailInput() {
    if (isEmailValid(emailInput.value)) {
        feedbackElement.textContent = ""; // clears inline error if email is valid
        feedbackElement.style.display= "none";
        return true;
    } else {
        feedbackElement.textContent = "Please enter a valid email address."; // Show error message
        feedbackElement.style.display = "inline";
        return false;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    if (validateEmailInput()){
        emailModal.showModal(); // show modal if the email is valid
    }
}

// close modal and refresh the form

closeModalButton.addEventListener('click', () => {
    console.log("user submitted email:", emailInput.value);
    console.log("Modal closed. Form has been reset.")
    emailModal.close();
    emailForm.reset(); 
});

emailForm.addEventListener('submit', handleSubmit);