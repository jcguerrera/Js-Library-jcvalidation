const expressionss = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numeros.
    date: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/,
    textarea: /^[a-zA-Z0-9_.+--ZÀ-ÿ\s]{1,80}$/
}

module.exports = expressionss;

function validateEmail(email) {
    return expressionss.mail.test(email);
}

function validateName(name) {
    return expressionss.name.test(name);
}

module.exports = { validateEmail, validateName };