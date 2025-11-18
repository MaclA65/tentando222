// ======== TROCA DE TELAS ========
const botoes = document.querySelectorAll(".materia-btn");
const telas = document.querySelectorAll(".materia-tela");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    // Remove ativo de todos
    botoes.forEach(b => b.classList.remove("ativo"));
    botao.classList.add("ativo");

    // Esconde todas as telas
    telas.forEach(t => t.classList.remove("ativa"));

    // Mostra a tela correspondente
    const alvo = botao.id.replace("btn", "tela");
    document.getElementById(alvo).classList.add("ativa");
  });
});

// ======== DADOS DO RANKING ========
const ranking = [
  { nome: "Isabelly", pontos: 290, tempo: "2h15min" },
  { nome: "Lucas", pontos: 275, tempo: "2h30min" },
  { nome: "Maria", pontos: 260, tempo: "2h45min" },
  { nome: "João", pontos: 240, tempo: "3h10min" },
  { nome: "Sofia", pontos: 230, tempo: "3h20min" },
  { nome: "Pedro", pontos: 220, tempo: "3h50min" },
  { nome: "Julia", pontos: 215, tempo: "4h00min" },
  { nome: "Ana", pontos: 200, tempo: "4h30min" },
  { nome: "Rafa", pontos: 180, tempo: "5h00min" }
];

function renderRanking() {
  ranking.sort((a, b) => b.pontos - a.pontos);

  const tbody = document.querySelector("#tabelaRanking tbody");
  tbody.innerHTML = "";
  ranking.forEach((aluno, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}º</td>
      <td>${aluno.nome}</td>
      <td>${aluno.pontos}</td>
      <td>${aluno.tempo}</td>
    `;
    tbody.appendChild(tr);
  });

  const top3 = document.getElementById("top3");
  top3.innerHTML = ranking
    .slice(0, 3)
    .map((a, i) => `<div class="card"><strong>${i + 1}º</strong> ${a.nome} — ${a.pontos} pts</div>`)
    .join("");
}

// Botão de atualizar
document.getElementById("shuffleBtn").addEventListener("click", () => {
  ranking.forEach(a => a.pontos = Math.floor(Math.random() * 300));
  renderRanking();
});

renderRanking();
