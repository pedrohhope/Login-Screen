const error = document.querySelectorAll('.error')

function validateFeilds(){
    const NameValid = isNameValid()
    const emailValid = isEmailValid()
    const passwordValid = isPasswordValid()
    document.querySelector('#Login-Button').disabled = !NameValid || !emailValid ||  !passwordValid
}




function isNameValid(){
    const name = document.querySelector('#name').value

    if(!name){
        return false
    }
     
    return ValidateName()
}

function isEmailValid(){
    const email = document.querySelector('#email').value

    if(!email){
        return false
    }else if(ValidateEmail(email) == false){
        error[1].style.display = 'flex'
    } else if(ValidateEmail(email) == true){
        error[1].style.display = 'none'
    }
    return ValidateEmail(email)
}

function isPasswordValid(){
    const password = document.querySelector('#password').value
    if(!password){
        return false
    } else if(ValidatePassword(password) == false){
        error[2].style.display = 'flex'
    } else if(ValidatePassword(password) == true){
        error[2].style.display = 'none'
    }
    return ValidatePassword(password)
}


function ValidateEmail(email){
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(email)
    // the e-mail must contain at least @
}


function ValidatePassword(password){
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    // minimum of 8 characters, at least one letter and one number
}

function ValidateName(name){
    return /^([a-zA-Z]{2,}[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}?([a-zA-Z]{1,})?)/.test(name)
} 

