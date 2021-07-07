// TODO: Delete this line
import { insertAfter } from "./ejemplo.js";

// TODO: Import expressions from another file
// import { expressions } from "./expression.js";
// const expressions = require('./expression.js');

export var form = document.getElementById('form')

export const validationItems = {
    text: false,
    mail: false,
    date: false,
    textarea: false,
    select: false
}

export const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    text: /^[a-zA-ZÀ-ÿ\s]{7,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numeros.
    date: /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
    textarea: /^[a-zA-Z0-9_.+--ZÀ-ÿ\s]{1,80}$/
}

export const otherInputs = (inputs) => {
    console.log(inputs);
    inputs.forEach((input) => {
        input.addEventListener('blur', function (e) {
            var tagName = input.getAttribute('jc-validation');
            console.log(tagName);
            if (tagName == 'text' && e.target.type == 'text') {
                checkFields(expressions[tagName], e.target, tagName)
            }
            else if (tagName == 'mail' && e.target.type == 'text') {
                checkFields(expressions[tagName], e.target, tagName)
            }

            else if (tagName == 'date'&& e.target.type == 'date') {
                checkFields(expressions[tagName], e.target, tagName)
            }
        })
    })
}

export const checkTextareas = (text) => {
    text.forEach((textarea) => {
        textarea.addEventListener('blur', function (e) {
            var tagName = textarea.getAttribute('jc-validation');
            console.log(e.target.type);
            if (tagName == 'textarea' && e.target.type == 'textarea') {
                checkFields(expressions[tagName], e.target, tagName)
            }
        })
    })
}

export const checkSelect = (select) => {

    select.forEach((sel) => {
        sel.addEventListener('blur', function (e) {
            let tagName = sel.getAttribute('jc-validation');
            console.log(e.target.type);
            console.log(tagName);
            if (tagName == 'select') {
                if (e.target.value == "") {
                    alert('Pick an option')
                    validationItems[tagName] = false
                    return true
                } else {
                    validationItems[tagName] = true
                    return false
                }
            }
        })
    })
}

export const checkFields = (expressions, e, field) => {
    const errors = {
        text: 'Invalid Name, Check the correct format or complete the field',
        mail: 'Invalid Mail, Check the correct format (@/.)or complete the field with a domain',
        date: 'Format mm/dd/yy, check!',
        textarea: 'Invalid comment',
        select: 'choice an option'
    }
    if (expressions.test(e.value)) {
        document.getElementById(`message_${field}`).innerHTML = 'correct field'
        validationItems[field] = true;
        return true
    } else {
        document.getElementById(`message_${field}`).innerHTML = errors[field]
        validationItems[field] = false;
        return false
    }
}

export function checkForm(document) {
    var number = document.forms.length;
    for (let i = 0; i < number; i++) {
        if (document.forms[i].hasAttribute('jc-validation')) {
            document.querySelectorAll('form[jc-validation] input, form[jc-validation] textarea, form[jc-validation] select');
            document.querySelectorAll('textarea[jc-validation]');
            return true
        }
        return false
    }
}
