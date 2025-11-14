const form = document.getElementById('form');

function calculateAge(e) {
  e.preventDefault();
  const birthDay = parseInt(document.getElementById('birth_day').value);
  const birthMonth = parseInt(document.getElementById('birth_month').value);
  let birthYear = parseInt(document.getElementById('birth_year').value);
  
  if (birthYear < 100) {
    birthYear += 2000;
  }
  
  if (!validateInputs(birthDay, birthMonth, birthYear)) {
    return;
  }
  
  const age = getAge(birthYear, birthMonth, birthDay);
  displayAge(age);
}

function validateInputs(day, month, year) {
  let isValid = true;
  
  if (isNaN(day) || day < 1 || day > 31) {
    showError('error-input-day', 'Must be a valid date');
    isValid = false;
  } else {
    clearError('error-input-day');
  }
  
  if (isNaN(month) || month < 1 || month > 12) {
    showError('error-input-month', 'Must be a valid month');
    isValid = false;
  } else {
    clearError('error-input-month');
  }
  
  if (isNaN(year) || year < 1) {
    showError('error-input-year', 'Must be a valid year');
    isValid = false;
  } else {
    clearError('error-input-year');
  }
  
  if (isValid) {
    const testDate = new Date(year, month - 1, day);
    if (testDate.getDate() !== day || testDate.getMonth() !== month - 1) {
      showError('error-input-day', 'This date does not exist');
      isValid = false;
    }
  }
  
  if (isValid) {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    if (birthDate > today) {
      showError('error-input-year', 'Birth date cannot be in the future');
      isValid = false;
    }
  }
  
  return isValid;
}

function getAge(year, month, day) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  
  if (days < 0) {
    const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += daysInPrevMonth;
    months--;
  }
  
  if (months < 0) {
    months += 12;
    years--;
  }
  
  return { years, months, days };
}

function displayAge(age) {
  document.getElementById('years-display').textContent = age.years;
  document.getElementById('months-display').textContent = age.months;
  document.getElementById('days-display').textContent = age.days;
}

function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

function clearError(elementId) {
  document.getElementById(elementId).textContent = '';
}

form.addEventListener('submit', calculateAge);