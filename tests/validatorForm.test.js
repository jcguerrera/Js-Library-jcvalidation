const { validateEmail, validateName, validateDate, validateArea } = require('../expression');

test('Regex Email', () => {
    expect(validateEmail('younger@gmail.com')).toBe(true);
});

test('Regex name', () => {
    expect(validateName('Juan')).toBe(true);
});

test('Regex date', () => {
    expect(validateDate('03/12/01')).toBe(true);
});

test('Regex textArea', () => {
    expect(validateArea('Hola esto es un comentario')).toBe(true);
});