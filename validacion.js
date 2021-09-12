let formulario = document.getElementById('form');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let formData = new formData(form);
        
               const contato = {
            nome: formData.post('nome').value.trim(),
            telefone: formData.post('telefone').value.trim(),
            email: formData.post('email').value.trim(),
            mensaje: formData.post('mensaje').value.trim()
    };
     
    formData.push(contato);
});

let erros = [];

if (!validarCampo(nome)) {
    erros.push("O nome é obrigatorio");
} else { 
    'ingreso obrigatorio')
}

if (!validarTelefone(telefone)) {
    erros.push("O telefone é obrigatorio")
} else{
    'ingreso obrigatorio')
}

if (!validarEmail(email)) {
    erros.push("O email é obrigatorio")
} else{
    'ingreso obrigatorio')
}


function validarCampo(valor){
    return !!valor
};

function validarTelefone(valor) {
    /^[0-9]{2}-[0-9]{5}-[0-9]{4}$/.test(valor)
};

function validarEmail(valor){
    return /^\S+@\S+$/.test(valor)
};

function lenghtMesaje (valor){
    return valor.length != 50;
}