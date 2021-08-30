const form = document.getElementById('form');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const nomeValue = nome.value.trim()
     
}
