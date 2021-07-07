import { otherInputs, checkTextareas, checkSelect, validationItems, checkForm } from "./app.js";
var form = document.getElementById('form')
var inputs = document.querySelectorAll('input');
var textarea = document.querySelectorAll('textarea');
var select = document.querySelectorAll('select');

//toast -> messages

if(checkForm(document)){
    otherInputs(inputs);
    checkTextareas(textarea);
    checkSelect(select);
    form.addEventListener('submit', (e) => {
        console.log(document.forms[0]);
        e.preventDefault();
        
        if (validationItems.mail && validationItems.text && validationItems.date && validationItems.textarea && validationItems.select) {
            alert('enviado correctamente')
            form.reset();
            for (let i in validationItems) {
                document.getElementById(`message_${i}`).innerHTML = ''
            }
    
        } else {
            alert('Complete Fields')
        }
    })
}


