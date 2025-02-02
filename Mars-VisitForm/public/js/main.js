// validate phone number
function validatePhone(phone) {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(phone);
}

// validate date
function validateDate(date) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
}
// alert window
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('dob');

    if (phoneInput) {
        phoneInput.addEventListener('blur', () => {
            if (!validatePhone(phoneInput.value)) {
                alert('Please enter a valid US phone number (e.g., 123-456-7890).');
                setTimeout(() => phoneInput.focus(), 0); // wait user to operate
            }
        });
    }

    if (dateInput) {
        dateInput.addEventListener('blur', () => {
            if (!validateDate(dateInput.value)) {
                alert('Please enter a valid date in YYYY-MM-DD format.');
                setTimeout(() => dateInput.focus(), 0);
            }
        });
    }
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validatePhone, validateDate };
}