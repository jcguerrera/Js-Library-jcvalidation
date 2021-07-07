const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    text: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numeros.
    date: /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
    textarea: /^[a-zA-Z0-9_.+--ZÀ-ÿ\s]{1,80}$/
}

function validateEmail(email) {
    return expressions.mail.test(email);
}

function validateText(text) {
    return expressions.text.test(text);
}

function validateDate(date){
    return expressions.date.test(date);
}

function validateArea(textarea){
    return expressions.textarea.test(textarea);
}

module.exports = expressions;
module.exports = { validateEmail, validateText, validateDate, validateArea };