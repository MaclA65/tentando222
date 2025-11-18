const botoes = document.querySelectorAll(".dia");
const confirmar = document.getElementById("confirmar");

// Selecionar e desselecionar
botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    botao.classList.toggle("ativo"); 
  });
});

confirmar.addEventListener("click", () => {
  const selecionados = [];
  botoes.forEach(botao => {
    if (botao.classList.contains("ativo")) {
      selecionados.push(botao.innerText);
    }
  });

  if (selecionados.length > 0) {
    window.location.href = "perguntaaluno3.html"; 
  } else {
    alert("Por favor, selecione pelo menos um dia!");
  }
});
