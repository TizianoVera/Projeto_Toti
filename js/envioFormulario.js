
let form = document.getElementById("form");
    
async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("active");
  const form = new FormData(event.target);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.style.color = '#34DB34'
    status.style.fontSize = '20px'
    status.style.marginLeft = '22%'
    status.innerHTML = "Obrigado por me contactar 👍!";
    this.reset()
  }).catch(error => {
    status.innerHTML = "UPS! Ocorreu um problema ao enviar seu formulário"
  });
}
form.addEventListener("submit", handleSubmit)