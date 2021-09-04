let formulario = document.getElementById('form');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let formData = new formData(form);
        
               const contato = {
            nome: formData.get('nome').value.trim(),
            telefone: formData.get('telefone').value.trim(),
            email: formData.get('email').value.trim(),
            mensaje: formData.get('mensaje').value.trim()
    };
     
    formData.push(contato);
});

let erros = [];

if (!validarCampo(contato.nome)) {
    erros.push("O nome é obrigatorio");
} else { 
    alert('ingreso obrigatorio')
}

if (!validarTelefone(contato.telefone)) {
    erros.push("O telefone é obrigatorio")
} else{
    alert('ingreso obrigatorio')
}

if (!validarEmail(contato.email)) {
    erros.push("O email é obrigatorio")
} else{
    alert('ingreso obrigatorio')
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