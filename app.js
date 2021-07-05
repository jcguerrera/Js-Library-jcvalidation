import {insertAfter} from "./ejemplo.js";
export var form = document.getElementById('form')

export const validationItems = {
    name : false,
    mail : false,
    date : false,
    textarea: false,
    select: false
}

const expresions = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
    date : /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/,
    textarea: /^[a-zA-Z0-9_.+--ZÀ-ÿ\s]{1,80}$/
}

module.exports = expresions;

export const otherInputs = (inputs) =>{
    console.log(inputs);
    inputs.forEach((input) =>{
        input.addEventListener('blur', function(e){
            console.log(e.target.type);
            var tagName = input.getAttribute('jc-validation');
            console.log(tagName);
            if(tagName == 'name'){
                checkFields(expresions[tagName], e.target,tagName)
            }
            
            else if(tagName=='mail'){
                checkFields(expresions[tagName], e.target,tagName)
            }
            
            else if(tagName == 'date'){
                checkFields(expresions[tagName], e.target,tagName)
            }
        })
    })
}

export const checkTextareas = (text) =>{
    text.forEach((textarea)=>{
        textarea.addEventListener('blur', function(e){
            var tagName = textarea.getAttribute('jc-validation');
            console.log(tagName);
            if(tagName == 'textarea'){
                checkFields(expresions[tagName], e.target,tagName)
            }
        })
    })
}

export const checkSelect = (select) =>{

    select.forEach((sel) =>{
        sel.addEventListener('blur', function(e){
            let tagName = sel.getAttribute('jc-validation');
            console.log(e.target.type);
            console.log(tagName);
            if(tagName == 'select'){
                if(e.target.value == "" ){
                    alert('Pick an option')
                    validationItems[tagName] = false
                    return true
                }else{
                    validationItems[tagName] = true
                    return false
                }
            }
        })
    })
}

export const checkFields = (expresions, e, field) =>{
    
    const errors = {
        name : 'Invalid Name, Check the correct format or complete the field',
        mail : 'Invalid Mail, Check the correct format (@/.)or complete the field with a domain',
        date : 'Format mm/dd/yy, check!',
        textarea:'Invalid comment',
        select: 'choice an option'
    }
    if(expresions.test(e.value) ){
        document.getElementById(`message_${field}`).innerHTML = 'correct field'
        validationItems[field] = true;
        return true
    }else{
        document.getElementById(`message_${field}`).innerHTML = errors[field]
        validationItems[field] = false;
        return false
    }
}




