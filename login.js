// Este script apenas impede envio com campos vazios
// e deixa o redirecionamento ser feito pelo próprio HTML (action="cronograma.html")

document.getElementById('loginForm').addEventListener('submit', function (e) {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (email === "" || senha === "") {
    e.preventDefault(); // impede o envio se estiver vazio
    alert("Preencha todos os campos.");
  }
  // se estiver tudo preenchido, o próprio formulário vai redirecionar
});
