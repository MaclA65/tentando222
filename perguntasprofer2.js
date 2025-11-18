// Selecionar e desmarcar matérias
document.querySelectorAll('.materia').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selecionada');
    });
  });
  
  // Pesquisa
  const campoPesquisa = document.getElementById('campoPesquisa');
  const listaMaterias = document.getElementById('listaMaterias').children;
  
  campoPesquisa.addEventListener('input', () => {
    const filtro = campoPesquisa.value.toLowerCase();
    Array.from(listaMaterias).forEach(materia => {
      const texto = materia.textContent.toLowerCase();
      materia.style.display = texto.includes(filtro) ? "block" : "none";
    });
  });
  
  // Confirmar
  document.getElementById('confirmar').addEventListener('click', () => {
    const selecionadas = [];
    document.querySelectorAll('.materia.selecionada').forEach(m => {
      selecionadas.push(m.textContent);
    });
  
    if (selecionadas.length > 0) {
      // Selecionei pelo menos uma matéria → vai para index.html
      window.location.href = "perguntaprofer12.html";
    } else {
      alert("Selecione pelo menos uma matéria!");
    }
  });