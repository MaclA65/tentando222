document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.materia-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      abrirMateria(btn.dataset.mat);
    });
  });
});

let videosPorMateria = {
  1: [{id:'ezsGCxF6pQI', capa:'https://img.youtube.com/vi/ezsGCxF6pQI/hqdefault.jpg'}],
  2: [{id:'9tW83jfWX7U', capa:'https://img.youtube.com/vi/9tW83jfWX7U/hqdefault.jpg'}],
  3: [{id:'tFGlxXZSTqY', capa:'https://img.youtube.com/vi/tFGlxXZSTqY/hqdefault.jpg'}],
  4: [{id:'TiJBt5RrA-E', capa:'https://img.youtube.com/vi/TiJBt5RrA-E/hqdefault.jpg'}],
  5: [{id:'UbRS2iHt-uo', capa:'https://img.youtube.com/vi/UbRS2iHt-uo/hqdefault.jpg'}],
  6: [{id:'FUyBewZ8YOI', capa:'https://img.youtube.com/vi/FUyBewZ8YOI/hqdefault.jpg'}],
  7: [{id:'tj638Wk3GNg', capa:'https://img.youtube.com/vi/tj638Wk3GNg/hqdefault.jpg'}],
  8: [{id:'i7QwQPiAa0A', capa:'https://img.youtube.com/vi/i7QwQPiAa0A/hqdefault.jpg'}],
};

function abrirMateria(num) {
  const menu = document.getElementById('menu');
  const conteudo = document.getElementById('conteudo');

  menu.style.display = 'none';
  conteudo.style.display = 'block';

  let html = `<h2>Editar Vídeos - Matéria ${num}</h2>`;
  html += `<div class="video-grid">`;

  videosPorMateria[num].forEach((video, i) => {
    html += `
      <div class="video-card">
        <img src="${video.capa}" alt="Capa do vídeo ${i+1}" class="video-thumb">
        <input type="text" value="${video.id}" placeholder="ID do vídeo" data-index="${i}" class="video-id-input">
        <button onclick="atualizarVideo(${num}, ${i})">Salvar</button>
      </div>
    `;
  });

  html += `</div><button class="back-btn" onclick="voltarMenu()">⬅ Voltar</button>`;
  conteudo.innerHTML = html;
}

// Atualiza o vídeo
function atualizarVideo(materia, index) {
  const input = document.querySelector(`.video-id-input[data-index="${index}"]`);
  const novoId = input.value.trim();
  const novaCapa = `https://img.youtube.com/vi/${novoId}/hqdefault.jpg`;

  videosPorMateria[materia][index].id = novoId;
  videosPorMateria[materia][index].capa = novaCapa;

  alert("Vídeo atualizado!");
}

// Voltar ao menu
function voltarMenu() {
  const menu = document.getElementById('menu');
  const conteudo = document.getElementById('conteudo');

  conteudo.innerHTML = '';
  conteudo.style.display = 'none';
  menu.style.display = 'block';
}
