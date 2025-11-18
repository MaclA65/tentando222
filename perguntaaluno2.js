const opcoes = document.querySelectorAll(".opcao:not(.outros)");
const outros = document.querySelector(".opcao.outros");
const inputOutros = document.getElementById("input-outros");
const confirmar = document.getElementById("confirmar");

// Selecionar apenas uma opção
opcoes.forEach(botao => {
  botao.addEventListener("click", () => {
    opcoes.forEach(b => b.classList.remove("ativo"));
    outros.classList.remove("ativo");
    inputOutros.classList.remove("ativo");
    botao.classList.add("ativo");
  });
});

// Quando clicar em "OUTROS"
outros.addEventListener("click", () => {
  opcoes.forEach(b => b.classList.remove("ativo"));
  outros.classList.add("ativo");
  inputOutros.classList.add("ativo");
  inputOutros.focus();
});

confirmar.addEventListener("click", () => {
  const ativo = document.querySelector(".opcao.ativo");

  if (ativo) {
    if (ativo.classList.contains("outros")) {
      const escolhido = inputOutros.value.trim();
      if (!escolhido) {
        alert("Por favor, digite o horário em OUTROS.");
        return;
      }
    }

    // ✅ Redireciona direto sem mostrar alert
    window.location.href = "cronograma.html";
    
  } else {
    alert("Por favor, selecione uma opção!");
  }
});
