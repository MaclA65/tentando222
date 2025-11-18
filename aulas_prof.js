document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.materia-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => abrirMateriaProfessor(btn.dataset.mat));
  });

  document.getElementById('botao-voltar').style.display = 'none';
});

// Conteúdo inicial (mesmo do aluno, mas editável)
let aulas = {
  portugues: [],
  matematica: [],
  historia: [],
  geografia: [],
  fisica: [],
  quimica: [],
  biologia: [],
  filosofia: [],
  sociologia: [],
  literatura: []
};

/* ABRIR MATÉRIA PARA EDIÇÃO */
function abrirMateriaProfessor(materia) {
  const menu = document.getElementById('menu');
  const conteudo = document.getElementById('conteudo');
  const titulo = document.getElementById('tituloTela');
  const botaoVoltar = document.getElementById('botao-voltar');

  menu.style.display = 'none';
  conteudo.style.display = 'block';
  botaoVoltar.style.display = 'block';

  titulo.textContent = materia.charAt(0).toUpperCase() + materia.slice(1);

  let html = `<h2>Editar aulas de ${titulo.textContent}</h2>`;

  if (!aulas[materia] || aulas[materia].length === 0) {
    html += `<p>Nenhuma aula cadastrada ainda.</p>`;
  }

  (aulas[materia] || []).forEach((aula, idx) => {
    html += `
      <div class="aula-editor" data-idx="${idx}">
        <input type="text" class="titulo-input" value="${aula.titulo}" placeholder="Título da aula" />
        <textarea class="texto-input" placeholder="Conteúdo da aula">${aula.texto}</textarea>
        <button onclick="salvarAula('${materia}', ${idx})">💾 Salvar</button>
        <button onclick="removerAula('${materia}', ${idx})">❌ Remover</button>
      </div>
      <hr/>
    `;
  });

  html += `<button class="adicionar-btn" onclick="adicionarAula('${materia}')">➕ Adicionar nova aula</button>`;

  conteudo.innerHTML = html;
  conteudo.scrollTop = 0;
}

/* SALVAR AULA */
function salvarAula(materia, idx) {
  const aulaDiv = document.querySelector(`.aula-editor[data-idx='${idx}']`);
  aulas[materia][idx].titulo = aulaDiv.querySelector('.titulo-input').value;
  aulas[materia][idx].texto = aulaDiv.querySelector('.texto-input').value;
  alert('Aula salva com sucesso!');
}

/* REMOVER AULA */
function removerAula(materia, idx) {
  if (confirm('Deseja realmente remover esta aula?')) {
    aulas[materia].splice(idx, 1);
    abrirMateriaProfessor(materia);
  }
}

/* ADICIONAR NOVA AULA */
function adicionarAula(materia) {
  if (!aulas[materia]) aulas[materia] = [];
  aulas[materia].push({ titulo: 'Nova Aula', texto: 'Conteúdo da aula...' });
  abrirMateriaProfessor(materia);
}

/* VOLTAR AO MENU */
function voltarMenu() {
  const menu = document.getElementById('menu');
  const conteudo = document.getElementById('conteudo');
  const titulo = document.getElementById('tituloTela');
  const botaoVoltar = document.getElementById('botao-voltar');

  conteudo.style.display = 'none';
  menu.style.display = 'flex';
  botaoVoltar.style.display = 'none';
  titulo.textContent = 'Aulas';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

