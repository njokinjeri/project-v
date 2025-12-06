const form = document.getElementById('form');
const birthDayInput = document.getElementById('birth_day');
const birthMonthInput = document.getElementById('birth_month');
const birthYearInput = document.getElementById('birth_year');
const errorInputDay = document.getElementById('error-input-day');
const errorInputMonth = document.getElementById('error-input-month');
const errorInputYear = document.getElementById('error-input-year');
const yearsEntryDisplay = document.getElementById('years-display');
const monthsEntryDisplay = document.getElementById('months-display');
const daysEntryDisplay = document.getElementById('days-display');

const TWO_DIGIT_THRESHOLD = 100;
const CURRENT_CENTURY = 2000;

function calculateAge(e) {
    e.preventDefault();

    const birthDay = parseInt(birthDayInput.value.trim());
    const birthMonth = parseInt(birthMonthInput.value.trim());
    let birthYear = parseInt(birthYearInput.value.trim());

    if (birthYear < TWO_DIGIT_THRESHOLD) birthYear += CURRENT_CENTURY;

    if (!validateInputs(birthDay, birthMonth, birthYear)) return;

    const age = computeAge(birthYear, birthMonth, birthDay);
    displayAge(age);
}

function validateInputs(day, month, year) {
    let valid = true;

    if (isNaN(day)) {
        showError(birthDayInput, errorInputDay, 'This field is required');
        valid = false
    } else if (day < 1 || day > 31) {
        showError(birthDayInput, errorInputDay, 'Must be a valid date')
        valid = false;
    } else {
        clearError(birthDayInput, errorInputDay)
    }
    
  if (isNaN(month)) {
        showError(birthMonthInput, errorInputMonth, 'This field is required');
        valid = false
    } else if (month < 1 || month > 12) {
        showError(birthMonthInput, errorInputMonth, 'Must be a valid month')
        valid = false;
    } else {
        clearError(birthMonthInput, errorInputMonth)
    }

  if (isNaN(year)) {
        showError(birthYearInput, errorInputYear, 'This field is required');
        valid = false
    } else if (year < 1 ) {
        showError(birthYearInput, errorInputYear, 'Must be a valid year')
        valid = false;
    } else {
        clearError(birthYearInput, errorInputYear)
    }

    if (valid) {
        const daysInMonth = new Date(year, month, 0).getDate();
        if (day > daysInMonth) {
            showError(errorInputDay, 'Must be a valid date');
            valid = false;
        }
    }

    if (valid) {
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (birthDate > today) {
            showError(errorInputYear, 'Must be in the past');
            valid = false;
        }
    }


    return valid;
}

function computeAge(year, month, day) {

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += prevMonth
        months--;
    }
    if (months < 0) {
        months += 12
        years--;
    }
    return {years, months, days};

}

function displayAge(age) {
    yearsEntryDisplay.textContent = age.years;
    monthsEntryDisplay.textContent = age.months;
    daysEntryDisplay.textContent = age.days;

}

function showError(inputElement, errorElement, message) {
    errorElement.textContent = message;

    inputElement.closest('.entry-column').classList.add('has-error');
}

function clearError(inputElement, errorElement) {
    errorElement.textContent = '';

    inputElement.closest('.entry-column').classList.remove('has-error');
}

form.addEventListener("submit", calculateAge);