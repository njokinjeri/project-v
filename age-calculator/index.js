const form = document.getElementById('form');


function calculateAge(e) {
    e.preventDefault();
    const birthDay = parseInt(document.getElementById('birth_day').value);
    const birthMonth = parseInt(document.getElementById('birth_month').value);
    const birthYear = parseInt(document.getElementById('birth_year').value);
    
    if (birthYear < 100) birthYear += 2000;
    const today = new Date();
    let valid = true;
    
    if (isNaN(birthDay) || birthDay < 1 || birthDay > 31) {
        document.getElementById('error-input-day').textContent = 'Must be a valid date';
        valid = false;
    } else {
        document.getElementById('error-input-day').textContent = '';
    }
    
    if (isNaN(birthMonth) || birthMonth < 1 || birthMonth > 12) {
        document.getElementById('error-input-month').textContent = 'Must be a valid month ';
        valid = false;
    } else {
        document.getElementById('error-input-month').textContent = '';
    }
    
    if (isNaN(birthYear) || birthYear < 1) {
        document.getElementById('error-input-year').textContent = 'Must be a valid year';
        valid = false;
    } else {
        document.getElementById('error-input-year').textContent = '';
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
    document.getElementById('years-display').textContent= years;
    document.getElementById('months-display').textContent= months;
    document.getElementById('days-display').textContent= days;
}

form.addEventListener("submit", calculateAge);