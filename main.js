import { validationItems, validateInputs, validateTextareas, validateSelects, validateAttribute } from "./app.js";

//toast -> messages
const validateForms = () =>{
    if(validateAttribute(document)){
        var form = document.querySelector('form')
        var inputs = document.querySelectorAll('input');
        var textarea = document.querySelectorAll('textarea');
        var select = document.querySelectorAll('select');
        console.log(form);
        validateInputs(inputs);
        validateTextareas(textarea);
        validateSelects(select);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validationItems.mail && validationItems.text && validationItems.date && validationItems.textarea && validationItems.select) {
                alert('Success')
                form.reset();
                for (let i in validationItems) {
                    document.getElementById(`message_${i}`).innerHTML = ''
                }
            } else {
                alert('Complete Fields')
            }
        })
    }
}

validateForms();




