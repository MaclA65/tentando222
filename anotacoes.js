// Função para salvar notas no localStorage
function salvarNotas() {
  const notaHoje = document.getElementById('nota-hoje').value;
  const notaOntem = document.getElementById('nota-ontem').value;

  localStorage.setItem('notaHoje', notaHoje);
  localStorage.setItem('notaOntem', notaOntem);

  mostrarMensagem("Notas salvas com sucesso!");
}

// Função para limpar notas
function limparNotas() {
  document.getElementById('nota-hoje').value = '';
  document.getElementById('nota-ontem').value = '';

  localStorage.removeItem('notaHoje');
  localStorage.removeItem('notaOntem');

  mostrarMensagem("Notas apagadas.");
}

// Função para exibir mensagem temporária
function mostrarMensagem(msg) {
  const mensagem = document.getElementById('anotacoes-msg');
  mensagem.textContent = msg;
  setTimeout(() => { mensagem.textContent = ''; }, 3000);
}

// Carregar notas salvas ao iniciar a página
document.addEventListener("DOMContentLoaded", function() {
  const notaHoje = localStorage.getItem('notaHoje') || '';
  const notaOntem = localStorage.getItem('notaOntem') || '';

  document.getElementById('nota-hoje').value = notaHoje;
  document.getElementById('nota-ontem').value = notaOntem;
});

