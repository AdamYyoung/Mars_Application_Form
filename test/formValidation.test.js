const { validatePhone, validateDate } = require('../public/js/main.js');

test('validatePhone returns true for valid US phone number', () => {
    expect(validatePhone('123-456-7890')).toBe(true);
});

test('validatePhone returns false for invalid US phone number', () => {
    expect(validatePhone('123-456-789')).toBe(false); // Missing last digit
    expect(validatePhone('1234567890')).toBe(false);  // Missing hyphens
    expect(validatePhone('123-456-78901')).toBe(false); // Extra digit
});

test('validateDate returns true for valid date format', () => {
    expect(validateDate('2023-10-15')).toBe(true);
});

test('validateDate returns false for invalid date format', () => {
    expect(validateDate('2023/10/15')).toBe(false); // Wrong separator
    expect(validateDate('15-10-2023')).toBe(false); // Wrong order
    expect(validateDate('2023-10-5')).toBe(false);  // Missing leading zero
});