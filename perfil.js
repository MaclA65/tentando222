// ================================
// CONFIGURAÇÕES INICIAIS
// ================================

// Elementos principais
const avatarImg = document.getElementById("avatar-img");
const mudarAvatarBtn = document.getElementById("mudar-avatar");
const modalAvatar = document.getElementById("avatar-modal");
const fecharModal = document.getElementById("fechar-modal");
const avatarOpcoes = document.querySelectorAll(".avatar-opcao");

// Elementos do modal de ajustes
const ajustesModal = document.getElementById("ajustes-modal");
const editarNome = document.getElementById("editar-nome");
const nomeUsuario = document.getElementById("nome-usuario");
const nomeInput = document.getElementById("nome-input");
const idadeInput = document.getElementById("idade-input");
const cursoInput = document.getElementById("curso-input");
const horasInput = document.getElementById("horas-input");
const salvarAjustes = document.getElementById("salvar-ajustes");
const cancelarAjustes = document.getElementById("cancelar-ajustes");

// ================================
// CARREGAR DADOS SALVOS
// ================================

function carregarDados() {
    // Carregar nome
    const nomeSalvo = localStorage.getItem("nomeUsuario");
    if (nomeSalvo) {
        nomeUsuario.textContent = nomeSalvo;
    }

    // Carregar avatar
    const avatarSalvo = localStorage.getItem("avatarUsuario");
    if (avatarSalvo) {
        avatarImg.src = avatarSalvo;
    }

    // Carregar idade
    const idadeSalva = localStorage.getItem("idadeUsuario");
    if (idadeSalva) {
        document.getElementById("display-idade").textContent = `${idadeSalva} anos`;
    }

    // Carregar curso
    const cursoSalvo = localStorage.getItem("cursoUsuario");
    if (cursoSalvo) {
        document.getElementById("display-curso").textContent = cursoSalvo;
    }

    // Carregar horas
    const horasSalvas = localStorage.getItem("horasUsuario");
    if (horasSalvas) {
        document.getElementById("display-horas").textContent = horasSalvas;
    }
}

// ================================
// AVATAR - FUNÇÕES
// ================================

// Abrir modal de avatar
mudarAvatarBtn.addEventListener("click", () => {
    modalAvatar.style.display = "flex";
    
    // Destacar avatar atual
    avatarOpcoes.forEach(opcao => {
        if (opcao.src === avatarImg.src) {
            opcao.classList.add('selected');
        } else {
            opcao.classList.remove('selected');
        }
    });
});

// Fechar modal de avatar
fecharModal.addEventListener("click", () => {
    modalAvatar.style.display = "none";
});

// Trocar avatar
avatarOpcoes.forEach(opcao => {
    opcao.addEventListener("click", () => {
        const novoAvatar = opcao.src;
        avatarImg.src = novoAvatar;
        localStorage.setItem("avatarUsuario", novoAvatar);
        
        // Destacar avatar selecionado
        avatarOpcoes.forEach(img => img.classList.remove('selected'));
        opcao.classList.add('selected');
        
        modalAvatar.style.display = "none";
        alert("✅ Avatar alterado com sucesso!");
    });
});

// ================================
// MODAL DE AJUSTES - FUNÇÕES
// ================================

// Abrir modal de ajustes
editarNome.addEventListener("click", () => {
    ajustesModal.style.display = "flex";
    
    // Preencher campos com valores atuais
    nomeInput.value = nomeUsuario.textContent;
    
    const idadeSalva = localStorage.getItem("idadeUsuario");
    if (idadeSalva) idadeInput.value = idadeSalva;
    
    const cursoSalvo = localStorage.getItem("cursoUsuario");
    if (cursoSalvo) cursoInput.value = cursoSalvo;
    
    const horasSalvas = localStorage.getItem("horasUsuario");
    if (horasSalvas) horasInput.value = horasSalvas;
});

// Fechar modal de ajustes
cancelarAjustes.addEventListener("click", () => {
    ajustesModal.style.display = "none";
});

// Salvar ajustes
salvarAjustes.addEventListener("click", () => {
    // Validar e salvar nome
    if (nomeInput.value.trim() !== "") {
        nomeUsuario.textContent = nomeInput.value.trim();
        localStorage.setItem("nomeUsuario", nomeInput.value.trim());
    }

    // Salvar idade
    if (idadeInput.value) {
        localStorage.setItem("idadeUsuario", idadeInput.value);
        document.getElementById("display-idade").textContent = `${idadeInput.value} anos`;
    }

    // Salvar curso
    if (cursoInput.value) {
        let cursoValor = cursoInput.value;
        if (cursoValor === "Outro") {
            const outroCurso = document.getElementById("curso-outro").value;
            cursoValor = outroCurso || "Outro";
        }
        localStorage.setItem("cursoUsuario", cursoValor);
        document.getElementById("display-curso").textContent = cursoValor;
    }

    // Salvar horas
    if (horasInput.value) {
        localStorage.setItem("horasUsuario", horasInput.value);
        document.getElementById("display-horas").textContent = horasInput.value;
    }

    ajustesModal.style.display = "none";
    alert("✅ Informações salvas com sucesso!");
});

// ================================
// CARDS CLICÁVEIS - NAVEGAÇÃO
// ================================

// Cards de informações pessoais
document.getElementById("card-idade").addEventListener("click", () => {
    ajustesModal.style.display = "flex";
});

document.getElementById("card-curso").addEventListener("click", () => {
    ajustesModal.style.display = "flex";
});

document.getElementById("card-horas").addEventListener("click", () => {
    ajustesModal.style.display = "flex";
});

// Cards de navegação
document.getElementById("abrir-cronograma").addEventListener("click", () => {
    window.location.href = "cronograma.html";
});

document.getElementById("abrir-anotacoes").addEventListener("click", () => {
    window.location.href = "anotacoes.html";
});

// NOVO: Ir para Ranking
document.querySelector(".card-ranking").addEventListener("click", () => {
    window.location.href = "rakingaluno.html";
});

// ================================
// FUNCIONALIDADES EXTRAS
// ================================

// Mostrar/ocultar campo "Outro" no curso
cursoInput.addEventListener("change", function() {
    const outroInput = document.getElementById("curso-outro");
    outroInput.style.display = this.value === "Outro" ? "block" : "none";
});

// Fechar modais clicando fora
window.addEventListener("click", function(event) {
    if (event.target === ajustesModal) {
        ajustesModal.style.display = "none";
    }
    if (event.target === modalAvatar) {
        modalAvatar.style.display = "none";
    }
});

// ================================
// INICIALIZAÇÃO
// ================================

// Carregar dados quando a página carregar
document.addEventListener("DOMContentLoaded", carregarDados);