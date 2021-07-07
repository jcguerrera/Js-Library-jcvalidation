const { validateEmail, validateText, validateDate, validateArea } = require('../expression');

test('Regex Email', () => {
    expect(validateEmail('younger@gmail.com')).toBe(true);
});

test('Regex Email', () => {
    expect(validateEmail('camilo')).toBe(false);
});

test('Regex text', () => {
    expect(validateText('Juan')).toBe(true);
});

test('Regex text', () => {
    expect(validateText('Juan32')).toBe(false);
});


test('Regex date', () => {
    expect(validateDate('2021-07-01')).toBe(true);
});

test('Regex date', () => {
    expect(validateDate('2021/07-01')).toBe(false);
});

test('Regex textArea', () => {
    expect(validateArea('Hola esto es un comentario')).toBe(true);
});

test('Regex textArea', () => {
    expect(validateArea('')).toBe(false);
});