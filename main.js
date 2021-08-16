
function validateEmail(e){
    let field = e.tarjet;
    let fieldValue = field.fieldValue;

    if (fieldValue.search('@') == -1){
        displayError('Email não é valido',field);
    } else {
        clearError(field);
    }

    field.classList.remove('not-validated');
    checkEnableSubmit ();
}

function validateNotEmpy(e){
    let field = e.tarjet;
    let fieldValue = fieldValue;

    if (fieldValue == ''){
        displayError('Caompo não pode ser vazio',field);
    }   else{
        clearError(field);
    }

    field.classList.remove('not-validated');
    checkEnableSubmit();
}

function displayError(message, field){
    clearError(field)
    field.classList.add('is-invalid');
    let error = document.createElement('small');
    error.style.color = 'red';
    error.classList.add('error-message');
    error.textContent = message;
    field.parentElement.appendChild(error);
}

function clearError(field){
    let container = field.parentElement;
    let error = container.querySelector('.error-menssage');
    if(error){
        container.removeChild(error);
    }
    field.classList.remove('is-invalid');
}

function checkEnableSubmit(){
    let form = document.querySelector('#form');
    let notValidated = form.querySelectorAll('.not-validated');
    let errors = form.querySelectorAll('.is-invalid');

    if (errors.length == 0 && notValidated.length == 0){
        enableSubmit();
    } else {
        disableSubmit();
    }
}

function enableSubmit(){
    let form = document.querySelector('#form');
    let submit = form.querySelector('[type-submit]');

    submit.disabeld = false;
}

function disableSubmit(){
    let form = document.querySelector('#form');
    let submit = form.querySelector('[type-submit]');

    submit.disabeld = true;
}

document.querySelectorAll('input').forEach(el => el.classList.add
('not-validated'));
document.querySelectorAll('input.email').forEach(el => el.addEventListener
('keyup',validateEmail));
document.querySelectorAll('input:required').forEach(el => el.addEventListener
('keyup',validateNotEmpy));