const form = document.getElementById('form');
const dayInput = document.getElementById('birth_day');
const monthInput = document.getElementById('birth_month');
const yearInput = document.getElementById('birth_year');
const yearsDisplay = document.getElementById('years-display');
const monthsDisplay = document.getElementById('months-display');
const daysDisplay = document.getElementById('days-display');
const errorDay = document.getElementById('error-input-day');
const errorMonth = document.getElementById('error-input-month');
const errorYear = document.getElementById('error-input-year');

const CURRENT_CENTURY = 2000;
const MAX_TWO_DIGIT_YEAR = 100;

form.addEventListener('submit', calculateAge);

function calculateAge(e) {
  e.preventDefault();
  
  const birthDay = parseInt(dayInput.value.trim());
  const birthMonth = parseInt(monthInput.value.trim());
  let birthYear = parseInt(yearInput.value.trim());
  
  if (birthYear < MAX_TWO_DIGIT_YEAR) {
    birthYear += CURRENT_CENTURY;
  }
  
  if (!validateInputs(birthDay, birthMonth, birthYear)) {
    return;
  }
  
  const age = computeAge(birthYear, birthMonth, birthDay);
  displayAge(age);
}

function validateInputs(day, month, year) {
  let isValid = true;
  
  if (!isValidDay(day)) {
    setError(errorDay, 'Must be a valid day');
    isValid = false;
  } else {
    clearError(errorDay);
  }
  
  if (!isValidMonth(month)) {
    setError(errorMonth, 'Must be a valid month');
    isValid = false;
  } else {
    clearError(errorMonth);
  }
  
  if (!isValidYear(year)) {
    setError(errorYear, 'Must be a valid year');
    isValid = false;
  } else {
    clearError(errorYear);
  }
  
  if (!isValid) {
    return false;
  }
  
  const testDate = new Date(year, month - 1, day);
  if (!isRealDate(testDate, day, month)) {
    setError(errorDay, 'This date does not exist');
    return false;
  }
  
  if (isFutureDate(testDate)) {
    setError(errorYear, 'Birth date cannot be in the future');
    return false;
  }
  
  return true;
}

function isValidDay(day) {
  return !isNaN(day) && day >= 1 && day <= 31;
}

function isValidMonth(month) {
  return !isNaN(month) && month >= 1 && month <= 12;
}

function isValidYear(year) {
  return !isNaN(year) && year >= 1;
}

function isRealDate(date, day, month) {
  return date.getDate() === day && date.getMonth() === month - 1;
}

function isFutureDate(date) {
  return date > new Date();
}

function computeAge(year, month, day) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  
  if (days < 0) {
    const daysInPrevMonth = getDaysInPreviousMonth(today);
    days += daysInPrevMonth;
    months--;
  }
  
  if (months < 0) {
    months += 12;
    years--;
  }
  
  return { years, months, days };
}

function getDaysInPreviousMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}

function displayAge({ years, months, days }) {
  yearsDisplay.textContent = years;
  monthsDisplay.textContent = months;
  daysDisplay.textContent = days;
}

function setError(element, message) {
  element.textContent = message;
}

function clearError(element) {
  element.textContent = '';
}