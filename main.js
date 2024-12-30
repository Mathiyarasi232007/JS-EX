function getDOB() {
    const dobInput = document.getElementById('inputDob').value;
    const currentDateInput = document.getElementById('cdate').value;

    if (!dobInput || !currentDateInput) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }

    const dob = new Date(dobInput);
    const currentDate = new Date(currentDateInput);

    if (dob > currentDate) {
        alert('Date of Birth cannot be in the future compared to the Current Date.');
        return;
    }

    if (isNaN(dob.getTime()) || isNaN(currentDate.getTime())) {
        alert('Invalid date format. Please enter valid dates.');
        return;
    }

    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }
    
    document.getElementById('currentAge').textContent = `Your age is ${age} years.`;
}
