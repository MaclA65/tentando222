document.addEventListener("DOMContentLoaded", () => {
    // ======== TROCA DE TELAS ========
    const botoes = document.querySelectorAll(".btn");
    const telas = document.querySelectorAll(".tela");
  
    botoes.forEach(botao => {
      botao.addEventListener("click", () => {
        botoes.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");
  
        telas.forEach(t => t.classList.remove("ativa"));
        if (botao.id === "btnHistorico") document.getElementById("telaHistorico").classList.add("ativa");
        if (botao.id === "btnRanking") document.getElementById("telaRanking").classList.add("ativa");
      });
    });
  
    // ======== RANKING ========
    const ranking = [
      { nome: "Isabelly 🤖", pontos: 290, tempo: "2h15min" },
      { nome: "Lucas 💡", pontos: 275, tempo: "2h30min" },
      { nome: "Maria 📱", pontos: 260, tempo: "2h45min" },
      { nome: "João 🧠", pontos: 240, tempo: "3h10min" },
      { nome: "Sofia 💻", pontos: 230, tempo: "3h20min" },
      { nome: "Pedro 🔢", pontos: 220, tempo: "3h50min" },
      { nome: "Julia 🎯", pontos: 215, tempo: "4h00min" },
      { nome: "Ana 🪐", pontos: 200, tempo: "4h30min" },
      { nome: "Rafa 🚀", pontos: 180, tempo: "5h00min" }
    ];
  
    function renderRanking() {
      ranking.sort((a, b) => b.pontos - a.pontos);
  
      const list = document.getElementById("rankingList");
      list.innerHTML = "";
      ranking.slice(0, 3).forEach((aluno, index) => {
        const medalha = ["🥇", "🥈", "🥉"][index];
        const card = document.createElement("div");
        card.classList.add("card", `top${index + 1}`);
        card.innerHTML = `
          <div class="info">
            <div class="nome">${medalha} ${aluno.nome}</div>
            <div class="pontos-info">${aluno.pontos} pts • ${aluno.tempo}</div>
          </div>
        `;
        list.appendChild(card);
      });
  
      const minhaPos = ranking.findIndex(r => r.nome.includes("Isabelly")) + 1;
      const meu = ranking[minhaPos - 1];
      document.getElementById("meuRanking").innerHTML = `
        <strong>${minhaPos}º lugar - ${meu.nome}</strong><br>
        Pontuação: ${meu.pontos} • Tempo: ${meu.tempo}
      `;
  
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
        if (aluno.nome.includes("Isabelly")) {
          tr.style.background = "#fff59d";
          tr.style.fontWeight = "bold";
        }
        tbody.appendChild(tr);
      });
    }
  
    // ======== BOTÃO DE ATUALIZAR PONTOS ========
    let shuffleBtn = document.getElementById("shuffleBtn");
    if (!shuffleBtn) {
      const btnDiv = document.createElement("div");
      btnDiv.classList.add("ranking-footer");
      btnDiv.innerHTML = `<button id="shuffleBtn">🔄 Atualizar Pontos</button>`;
      document.querySelector(".content").appendChild(btnDiv);
      shuffleBtn = document.getElementById("shuffleBtn");
    }
  
    shuffleBtn.addEventListener("click", () => {
      ranking.forEach(a => a.pontos = Math.floor(Math.random() * 300));
      renderRanking();
    });
  
    renderRanking();
  });
  