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
const formacao1Input = document.getElementById("formacao1-input");
const formacao2Input = document.getElementById("formacao2-input");
const salvarAjustes = document.getElementById("salvar-ajustes");
const cancelarAjustes = document.getElementById("cancelar-ajustes");

// ================================
// FUNÇÕES DO FOOTER
// ================================

function abrirSobre() {
    alert("📚 Sobre o Sistema de Tutoria\n\nEste é um sistema desenvolvido para conectar professores e estudantes, oferecendo ferramentas para organização e acompanhamento acadêmico.");
}

function abrirAjuda() {
    alert("❓ Ajuda\n\nPara obter ajuda, entre em contato conosco:\n📧 contato@tutoria.com\n📱 (11) 9999-9999\n\nEstamos disponíveis para tirar suas dúvidas!");
}

function abrirConfiguracoes() {
    alert("⚙️ Configurações\n\nAs configurações do sistema permitem personalizar sua experiência de ensino. Em breve, mais opções estarão disponíveis!");
}

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

    // Carregar formações
    const formacao1Salva = localStorage.getItem("formacao1Usuario");
    if (formacao1Salva) {
        document.getElementById("display-formacao1").textContent = formacao1Salva;
    }

    const formacao2Salva = localStorage.getItem("formacao2Usuario");
    if (formacao2Salva) {
        document.getElementById("display-formacao2").textContent = formacao2Salva;
    }

    // Carregar horários
    const horariosSalvos = localStorage.getItem("horariosUsuario");
    if (horariosSalvos) {
        document.getElementById("display-horarios").textContent = horariosSalvos;
    }

    // Carregar disciplinas
    const disciplinasSalvas = localStorage.getItem("disciplinasUsuario");
    if (disciplinasSalvas) {
        document.getElementById("display-disciplinas").textContent = disciplinasSalvas;
    }

    // Carregar ranking
    const rankingSalvo = localStorage.getItem("rankingUsuario");
    if (rankingSalvo) {
        document.getElementById("display-ranking").textContent = rankingSalvo;
    } else {
        // Ranking padrão para professores - POSIÇÃO #7
        document.getElementById("display-ranking").textContent = "Posição #7 🏆";
        localStorage.setItem("rankingUsuario", "Posição #7 🏆");
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
    
    const formacao1Salva = localStorage.getItem("formacao1Usuario");
    if (formacao1Salva) formacao1Input.value = formacao1Salva;
    
    const formacao2Salva = localStorage.getItem("formacao2Usuario");
    if (formacao2Salva) formacao2Input.value = formacao2Salva;
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

    // Salvar formações
    if (formacao1Input.value) {
        let formacao1Valor = formacao1Input.value;
        if (formacao1Valor === "Outro") {
            const outroFormacao = document.getElementById("formacao1-outro").value;
            formacao1Valor = outroFormacao || "Outro";
        }
        localStorage.setItem("formacao1Usuario", formacao1Valor);
        document.getElementById("display-formacao1").textContent = formacao1Valor;
    }

    if (formacao2Input.value && formacao2Input.value !== "Nenhuma") {
        let formacao2Valor = formacao2Input.value;
        if (formacao2Valor === "Outro") {
            const outroFormacao = document.getElementById("formacao2-outro").value;
            formacao2Valor = outroFormacao || "Outro";
        }
        localStorage.setItem("formacao2Usuario", formacao2Valor);
        document.getElementById("display-formacao2").textContent = formacao2Valor;
    } else {
        localStorage.setItem("formacao2Usuario", "");
        document.getElementById("display-formacao2").textContent = "Não informada";
    }

    // Salvar horários
    const horariosSelecionados = [];
    const dias = ['seg', 'ter', 'qua', 'qui', 'sex'];
    const periodos = ['manha', 'tarde', 'noite'];
    
    dias.forEach(dia => {
        periodos.forEach(periodo => {
            const checkbox = document.getElementById(`${dia}-${periodo}`);
            if (checkbox.checked) {
                horariosSelecionados.push(`${dia}-${periodo}`);
            }
        });
    });

    if (horariosSelecionados.length > 0) {
        const horariosTexto = `${horariosSelecionados.length} horários selecionados`;
        localStorage.setItem("horariosUsuario", horariosTexto);
        document.getElementById("display-horarios").textContent = horariosTexto;
    } else {
        localStorage.setItem("horariosUsuario", "");
        document.getElementById("display-horarios").textContent = "Não definidos";
    }

    // Salvar disciplinas
    const disciplinasSelecionadas = [];
    const disciplinas = [
        'matematica', 'portugues', 'historia', 'geografia', 
        'fisica', 'quimica', 'biologia', 'ingles', 
        'educacao-fisica', 'artes'
    ];
    
    disciplinas.forEach(disciplina => {
        const checkbox = document.getElementById(`disc-${disciplina}`);
        if (checkbox.checked) {
            disciplinasSelecionadas.push(disciplina);
        }
    });

    if (disciplinasSelecionadas.length > 0) {
        const disciplinasTexto = `${disciplinasSelecionadas.length} disciplinas`;
        localStorage.setItem("disciplinasUsuario", disciplinasTexto);
        document.getElementById("display-disciplinas").textContent = disciplinasTexto;
    } else {
        localStorage.setItem("disciplinasUsuario", "");
        document.getElementById("display-disciplinas").textContent = "Não definidas";
    }

    ajustesModal.style.display = "none";
    alert("✅ Informações salvas com sucesso!");
});

// ================================
// CARDS CLICÁVEIS (CÓDIGO SEGURO)
// ================================

const cards = [
    "card-idade",
    "card-formacao1", 
    "card-formacao2",
    "card-horarios",
    "card-disciplinas",
    "card-ranking" // CARD DE RANKING NO LUGAR DA FORMAÇÃO 3
];

cards.forEach(cardId => {
    const cardElement = document.getElementById(cardId);
    if (cardElement) {
        cardElement.addEventListener("click", () => {
            if (cardId === "card-ranking") {
                // Navegar para página de ranking
                window.location.href = "pro.html";
            } else {
                // Abrir modal de edição para outros cards
                ajustesModal.style.display = "flex";
            }
        });
    } else {
        console.log(`Card não encontrado: ${cardId}`);
    }
});

// ================================
// FUNCIONALIDADES EXTRAS
// ================================

// Mostrar/ocultar campo "Outro" nas formações
formacao1Input.addEventListener("change", function() {
    const outroInput = document.getElementById("formacao1-outro");
    outroInput.style.display = this.value === "Outro" ? "block" : "none";
});

formacao2Input.addEventListener("change", function() {
    const outroInput = document.getElementById("formacao2-outro");
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