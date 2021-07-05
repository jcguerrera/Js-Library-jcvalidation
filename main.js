import { otherInputs, checkTextareas, checkSelect, validationItems } from "./app.js";
var form = document.getElementById('form')
var inputs = document.querySelectorAll('input');
var textarea = document.querySelectorAll('textarea');
var select = document.querySelectorAll('select');
otherInputs(inputs);
checkTextareas(textarea);
checkSelect(select);



form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form.getAttributeNames());
    if (validationItems.mail && validationItems.name && validationItems.date && validationItems.textarea && validationItems.select) {
        alert('enviado correctamente')
        form.reset();
        for (let i in validationItems) {
            document.getElementById(`message_${i}`).innerHTML = ''
        }

    } else {
        alert('complete')
    }
})
