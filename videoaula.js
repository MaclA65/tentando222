document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.materia-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      abrirMateria(btn.dataset.mat);
    });
  });
});

function abrirMateria(num) {
  const menu = document.getElementById('menu');
  const conteudo = document.getElementById('conteudo');

  menu.style.display = 'none';
  conteudo.style.display = 'block';

  const videosPorMateria = {
    1: [ // Matemática
      { id: 'ezsGCxF6pQI', capa: 'https://img.youtube.com/vi/ezsGCxF6pQI/hqdefault.jpg' },
      { id: 'LPJZn9q6mHI', capa: 'https://img.youtube.com/vi/LPJZn9q6mHI/hqdefault.jpg' },
      { id: 'FzkAWvOAEUI', capa: 'https://img.youtube.com/vi/FzkAWvOAEUI/hqdefault.jpg' }
    ],
    2: [ // Português
      { id: '9tW83jfWX7U', capa: 'https://img.youtube.com/vi/9tW83jfWX7U/hqdefault.jpg' },
      { id: 'OxTNN-IKcEQ', capa: 'https://img.youtube.com/vi/OxTNN-IKcEQ/hqdefault.jpg' },
      { id: 'ocPoW-Sxu3o', capa: 'https://img.youtube.com/vi/ocPoW-Sxu3o/hqdefault.jpg' }
    ],
    3: [ // Geografia
      { id: 'tFGlxXZSTqY', capa: 'https://img.youtube.com/vi/tFGlxXZSTqY/hqdefault.jpg' },
      { id: '7f8CXiFp6fk', capa: 'https://img.youtube.com/vi/7f8CXiFp6fk/hqdefault.jpg' },
      { id: 'h5WjNMGztvE', capa: 'https://img.youtube.com/vi/h5WjNMGztvE/hqdefault.jpg' }
    ],
    4: [ // História
      { id: 'TiJBt5RrA-E', capa: 'https://img.youtube.com/vi/TiJBt5RrA-E/hqdefault.jpg' },
      { id: 'JlJv6ov-K00', capa: 'https://img.youtube.com/vi/JlJv6ov-K00/hqdefault.jpg' },
      { id: 'RedndCHHtYc', capa: 'https://img.youtube.com/vi/RedndCHHtYc/hqdefault.jpg' }
    ],
    5: [ // Física
      { id: 'UbRS2iHt-uo', capa: 'https://img.youtube.com/vi/UbRS2iHt-uo/hqdefault.jpg' },
      { id: 'VODXpPqTSTY', capa: 'https://img.youtube.com/vi/VODXpPqTSTY/hqdefault.jpg' },
      { id: 'jx44j8QFq4E', capa: 'https://img.youtube.com/vi/jx44j8QFq4E/hqdefault.jpg' }
    ],
    6: [ // Biologia
      { id: 'FUyBewZ8YOI', capa: 'https://img.youtube.com/vi/FUyBewZ8YOI/hqdefault.jpg' },
      { id: 'p4qTpxtJS4o', capa: 'https://img.youtube.com/vi/p4qTpxtJS4o/hqdefault.jpg' },
      { id: '-Vv3USW7iRU', capa: 'https://img.youtube.com/vi/-Vv3USW7iRU/hqdefault.jpg' }
    ],
    7: [ // Química
      { id: 'tj638Wk3GNg', capa: 'https://img.youtube.com/vi/tj638Wk3GNg/hqdefault.jpg' },
      { id: 'yv5168bi1X4', capa: 'https://img.youtube.com/vi/yv5168bi1X4/hqdefault.jpg' },
      { id: 'lDrKIqubzdw', capa: 'https://img.youtube.com/vi/lDrKIqubzdw/hqdefault.jpg' }
    ],
    8: [ // Educação Física
      { id: 'i7QwQPiAa0A', capa: 'https://img.youtube.com/vi/i7QwQPiAa0A/hqdefault.jpg' },
      { id: 'alZZ2PQ0SL8', capa: 'https://img.youtube.com/vi/alZZ2PQ0SL8/hqdefault.jpg' },
      { id: 'mTLW2c2Fjp0', capa: 'https://img.youtube.com/vi/mTLW2c2Fjp0/hqdefault.jpg' }
    ]
  };

  let html = `<h2>Matéria ${num}</h2><div class="video-grid">`;

  videosPorMateria[num].forEach((video, i) => {
    html += `
      <div class="video-card">
        <div class="video-wrap">
          <img src="${video.capa}" 
               alt="Capa do vídeo ${i + 1}" 
               class="video-thumb" 
               onclick="abrirVideo('${video.id}', this)">
        </div>
        <p>Vídeo ${i + 1}</p>
      </div>
    `;
  });

  html += `</div><button class="back-btn" onclick="voltarMenu()">⬅ Voltar</button>`;
  conteudo.innerHTML = html;
}

// Troca a capa pelo player do vídeo
function abrirVideo(id, imgElement) {
  const videoWrap = imgElement.parentElement;
  videoWrap.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${id}?autoplay=1"
      title="Vídeo do YouTube"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      loading="lazy">
    </iframe>
  `;
}

// Voltar ao menu
function voltarMenu() {
  const menu = document.getElementById('menu');
  const conteudo = document.getElementById('conteudo');

  conteudo.innerHTML = '';
  conteudo.style.display = 'none';
  menu.style.display = 'block';
}
