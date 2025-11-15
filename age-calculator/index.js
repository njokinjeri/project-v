const form = document.getElementById('form');
const birthDayInput = document.getElementById('birth_day');
const birthMonthInput = document.getElementById('birth_month');
const birthYearInput = document.getElementById('birth_year');
const errorInputDay = document.getElementById('error-input-day');
const errorInputMonth = document.getElementById('error-input-day');
const errorInputYear = document.getElementById('error-input-day');
const yearsEntryDisplay = document.getElementById('years-display');
const monthsEntryDisplay = document.getElementById('months-display');
const daysEntryDisplay = document.getElementById('days-display');


function calculateAge(e) {
    e.preventDefault();
    
    const birthDay = parseInt(birthDayInput.value);
    const birthMonth = parseInt(birthMonthInput.value);
    let birthYear = parseInt(birthYearInput.value);
    
    if (birthYear < 100) birthYear += 2000;
    const today = new Date();
    let valid = true;
    
    if (isNaN(birthDay) || birthDay < 1 || birthDay > 31) {
        showError(errorInputDay, 'Must be a valid date')
        valid = false;
    } else {
        clearError(errorInputDay)
    }
    
    if (isNaN(birthMonth) || birthMonth < 1 || birthMonth > 12) {
        showError(errorInputDay, 'Must be a valid month')
        valid = false;
    } else {
        clearError(errorInputMonth)
    }
    
    if (isNaN(birthYear) || birthYear < 1) {
        showError(errorInputYear, 'Must be a valid year')
        valid = false;
    } else {
        clearError(errorInputYear)
    }
    if (!valid) return;
    
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
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
    yearsEntryDisplay.textContent = years;
    monthsEntryDisplay.textContent = months;
    daysEntryDisplay.textContent = days;
}

function showError(element, message) {
    element.textContent = message;
}

function clearError(element) {
    element.textContent = '';
}

form.addEventListener("submit", calculateAge);