function checkAnswer(element, isCorrect) {
    const allOptions = element.parentElement.querySelectorAll('li');
    allOptions.forEach(opt => opt.style.pointerEvents = 'none'); // bloqueia cliques após escolha

    if (isCorrect) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}
// === Banco de 90 questões estilo ENEM ===
const questoes = [
  {
    enunciado: "1. Um estudante deseja calcular a área de um terreno retangular com 20 m de comprimento e 15 m de largura. Qual é a área total?",
    alternativas: ["200 m²", "250 m²", "300 m²", "350 m²", "400 m²"],
    correta: 2
  },
  {
    enunciado: "2. A Revolução Industrial teve início em qual país?",
    alternativas: ["França", "Alemanha", "Estados Unidos", "Inglaterra", "Itália"],
    correta: 3
  },
  {
    enunciado: "3. Qual o principal gás responsável pelo efeito estufa?",
    alternativas: ["Oxigênio", "Hidrogênio", "Dióxido de carbono (CO₂)", "Nitrogênio", "Metano"],
    correta: 2
  },
  {
    enunciado: "4. O número atômico representa o número de:",
    alternativas: ["Nêutrons", "Elétrons", "Prótons", "Moléculas", "Íons"],
    correta: 2
  },
  {
    enunciado: "5. Qual a função principal das hemácias no sangue humano?",
    alternativas: ["Defesa do organismo", "Transporte de oxigênio", "Produção de hormônios", "Digestão de lipídios", "Coagulação sanguínea"],
    correta: 1
  },
];

// Gerar automaticamente 90 questões (similares)
for (let i = questoes.length + 1; i <= 90; i++) {
  questoes.push({
    enunciado: `${i}. Questão interdisciplinar de exemplo — interpretação de texto e raciocínio lógico.`,
    alternativas: [
      "Alternativa A (exemplo)",
      "Alternativa B (exemplo)",
      "Alternativa C (exemplo)",
      "Alternativa D (exemplo)",
      "Alternativa E (exemplo)"
    ],
    correta: Math.floor(Math.random() * 5)
  });
}

// === Renderizar ===
const quiz = document.getElementById('quiz');
let pontuacao = 0;

questoes.forEach((q, index) => {
  const div = document.createElement('div');
  div.classList.add('question');
  div.innerHTML = `
    <h2>${q.enunciado}</h2>
    <ul>
      ${q.alternativas.map((alt, i) => `
        <li onclick="verificarResposta(this, ${i}, ${q.correta})">${alt}</li>
      `).join('')}
    </ul>
  `;
  quiz.appendChild(div);
});

function verificarResposta(elemento, indice, correta) {
  const opcoes = elemento.parentElement.querySelectorAll('li');
  opcoes.forEach(li => li.style.pointerEvents = 'none');

  if (indice === correta) {
    elemento.classList.add('correct');
    pontuacao++;
  } else {
    elemento.classList.add('wrong');
  }
}

function mostrarResultado() {
  document.getElementById('pontuacao').innerText = `Você acertou ${pontuacao} de ${questoes.length} questões.`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const segundaFase = [
    {
      enunciado: "1. Um reservatório de água tem capacidade de 2000 L. Se forem retirados 350 L por dia, após quantos dias ele estará vazio?",
      alternativas: ["5 dias", "5,5 dias", "6 dias", "6,5 dias", "7 dias"],
      correta: 2
    },
    {
      enunciado: "2. Uma molécula de água (H2O) contém:",
      alternativas: ["1 átomo de hidrogênio e 2 de oxigênio", "2 átomos de hidrogênio e 1 de oxigênio", "2 átomos de oxigênio e 1 de hidrogênio", "3 átomos de oxigênio", "3 átomos de hidrogênio"],
      correta: 1
    },
    {
      enunciado: "3. Em uma análise histórica, qual foi o principal fator que desencadeou a Revolução Industrial?",
      alternativas: ["Descobrimento da América", "Disponibilidade de recursos naturais e inovações tecnológicas", "Primeira Guerra Mundial", "Fim da escravidão", "Invenção da imprensa"],
      correta: 1
    },
    {
      enunciado: "4. Uma população de 1200 indivíduos cresce 5% ao ano. Qual será a população aproximada após 2 anos?",
      alternativas: ["1260", "1278", "1323", "1326", "1400"],
      correta: 3
    },
    {
      enunciado: "5. Qual é a função dos ribossomos nas células?",
      alternativas: ["Armazenamento de energia", "Produção de proteínas", "Respiração celular", "Transporte de oxigênio", "Digestão celular"],
      correta: 1
    },
    {
      enunciado: "6. Uma estrada tem 12 km de extensão. Um carro percorre 3/4 do caminho. Quantos quilômetros faltam?",
      alternativas: ["2 km", "3 km", "4 km", "5 km", "6 km"],
      correta: 2
    },
    {
      enunciado: "7. O que é a fotossíntese?",
      alternativas: [
        "Transformação de oxigênio em energia",
        "Produção de glicose a partir da luz solar",
        "Respiração das plantas à noite",
        "Digestão de nutrientes em plantas",
        "Produção de proteínas"
      ],
      correta: 1
    },
    {
      enunciado: "8. Qual evento marcou o início da Idade Contemporânea?",
      alternativas: ["Revolução Francesa", "Descobrimento da América", "Revolução Industrial", "Primeira Guerra Mundial", "Queda do Império Romano"],
      correta: 0
    },
    {
      enunciado: "9. Em português, qual é a função sintática do termo destacado: 'O menino **leu o livro** com atenção'?",
      alternativas: ["Sujeito", "Predicado verbal", "Objeto direto", "Objeto indireto", "Adjunto adverbial"],
      correta: 2
    },
    {
      enunciado: "10. Um líquido tem massa de 500 g e volume de 250 mL. Qual é sua densidade?",
      alternativas: ["0,5 g/mL", "1 g/mL", "1,5 g/mL", "2 g/mL", "2,5 g/mL"],
      correta: 1
    }
  ];
  