const { validateEmail, validateName } = require('../expression');

test('Regex Email', () => {
    expect(validateEmail('younger@gmail.com')).toBe(true);
});

test('Regex name', () => {
    expect(validateName('Bochim')).toBe(true);
});