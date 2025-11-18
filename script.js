// Sistema Principal do App Tutoria
class AppTutoria {
    constructor() {
        this.notas = JSON.parse(localStorage.getItem('tutoria_notas')) || [];
        this.mensagens = JSON.parse(localStorage.getItem('tutoria_chat')) || [];
        this.inicializar();
    }

    inicializar() {
        this.carregarDados();
        this.configurarEventos();
        console.log('🎓 App Tutoria Iniciado!');
    }

    // Sistema de Navegação
    abrirAulas() {
        this.mostrarModal('aulasModal');
        this.mostrarFeedback('📚 Aulas carregadas!', 'success');
    }

    abrirSimulados() {
        this.mostrarModal('simuladosModal');
        this.mostrarFeedback('📝 Simulados disponíveis!', 'success');
    }

    abrirChat() {
        this.mostrarModal('chatModal');
        this.carregarMensagensChat();
        this.mostrarFeedback('💬 Chat da turma aberto!', 'success');
    }

    abrirBlocoNotas() {
        this.mostrarModal('blocoNotasModal');
        this.carregarHistoricoNotas();
        this.mostrarFeedback('📓 Bloco de notas pronto!', 'success');
    }

    abrirTutores() {
        this.mostrarFeedback('👨‍🏫 Conectando com tutores...', 'info');
        setTimeout(() => {
            this.mostrarFeedback('✅ Conectado com o tutor João!', 'success');
        }, 2000);
    }

    abrirProgresso() {
        this.mostrarFeedback('📊 Carregando seu progresso...', 'info');
        setTimeout(() => {
            this.mostrarFeedback('📈 Seu progresso: 75% completo!', 'success');
        }, 1500);
    }

    // Sistema de Bloco de Notas
    salvarNota() {
        const textoNota = document.getElementById('notasText').value.trim();
       
        if (textoNota) {
            const novaNota = {
                id: Date.now(),
                texto: textoNota,
                data: new Date().toLocaleString('pt-BR'),
                tipo: 'nota'
            };
           
            this.notas.unshift(novaNota);
            this.salvarDados();
            this.carregarHistoricoNotas();
           
            this.mostrarFeedback('✅ Nota salva com sucesso!', 'success');
            document.getElementById('notasText').value = '';
        } else {
            this.mostrarFeedback('📝 Escreva algo antes de salvar!', 'warning');
        }
    }

    limparNota() {
        document.getElementById('notasText').value = '';
        this.mostrarFeedback('🗑️ Campo limpo!', 'info');
    }

    alternarHistorico() {
        const historico = document.getElementById('historicoNotas');
        historico.style.display = historico.style.display === 'none' ? 'block' : 'none';
    }

    carregarHistoricoNotas() {
        const historicoContainer = document.getElementById('historicoNotas');
        historicoContainer.innerHTML = '';

        if (this.notas.length === 0) {
            historicoContainer.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Nenhuma nota salva ainda. Comece a escrever!</p>';
            return;
        }

        this.notas.forEach(nota => {
            const notaElement = document.createElement('div');
            notaElement.className = 'nota-item';
            notaElement.innerHTML = `
                <div class="nota-data">${nota.data}</div>
                <div>${this.escapeHtml(nota.texto)}</div>
                <button onclick="app.deletarNota(${nota.id})" style="
                    background: #f44336;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 15px;
                    cursor: pointer;
                    margin-top: 8px;
                    font-size: 0.8em;
                ">🗑️ Deletar</button>
            `;
            historicoContainer.appendChild(notaElement);
        });
    }

    deletarNota(id) {
        this.notas = this.notas.filter(nota => nota.id !== id);
        this.salvarDados();
        this.carregarHistoricoNotas();
        this.mostrarFeedback('🗑️ Nota deletada!', 'info');
    }

    // Sistema de Chat
    enviarMensagem() {
        const inputChat = document.getElementById('chatInput');
        const mensagem = inputChat.value.trim();

        if (mensagem) {
            const novaMensagem = {
                id: Date.now(),
                texto: mensagem,
                data: new Date().toLocaleTimeString('pt-BR'),
                usuario: 'Você',
                tipo: 'mensagem'
            };

            this.mensagens.push(novaMensagem);
            this.salvarDados();
            this.carregarMensagensChat();
           
            inputChat.value = '';
            inputChat.focus();

            setTimeout(() => this.simularResposta(), 1000 + Math.random() * 2000);
        }
    }

    simularResposta() {
        const respostas = [
            "Ótima pergunta! Alguém mais sabe responder?",
            "Interessante! Vamos discutir isso na próxima aula.",
            "Alguém da turma pode ajudar com essa dúvida?",
            "Essa é uma dúvida comum, vamos trabalhar nisso!",
            "Ótimo ponto! Vamos explorar mais esse tema."
        ];

        const usuarios = ['Professor João', 'Monitor Ana', 'Colega Pedro', 'Tutora Maria'];
        const usuarioAleatorio = usuarios[Math.floor(Math.random() * usuarios.length)];
        const respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)];
       
        const resposta = {
            id: Date.now(),
            texto: respostaAleatoria,
            data: new Date().toLocaleTimeString('pt-BR'),
            usuario: usuarioAleatorio,
            tipo: 'resposta'
        };

        this.mensagens.push(resposta);
        this.salvarDados();
        this.carregarMensagensChat();
    }

    carregarMensagensChat() {
        const chatContainer = document.getElementById('chatMessages');
        chatContainer.innerHTML = '';

        if (this.mensagens.length === 0) {
            chatContainer.innerHTML = '<p style="text-align: center; color: #666; padding: 40px 20px;">Nenhuma mensagem ainda. Seja o primeiro a escrever!</p>';
            return;
        }

        this.mensagens.forEach(msg => {
            const msgElement = document.createElement('div');
            msgElement.className = `mensagem ${msg.usuario === 'Você' ? 'usuario' : ''}`;
            msgElement.innerHTML = `
                <strong>${msg.usuario}:</strong> ${this.escapeHtml(msg.texto)}
                <div style="font-size: 0.8em; color: #666; text-align: right; margin-top: 5px;">${msg.data}</div>
            `;
            chatContainer.appendChild(msgElement);
        });

        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Sistema de Modal
    mostrarModal(modalId) {
        this.fecharModal();
        document.getElementById(modalId).style.display = 'block';
    }

    fecharModal() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }

    // Funções de Apoio
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    mostrarFeedback(mensagem, tipo) {
        const feedback = document.createElement('div');
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${tipo === 'success' ? '#4CAF50' : tipo === 'warning' ? '#FF9800' : '#2196F3'};
            color: white;
            border-radius: 15px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            font-weight: 500;
            max-width: 300px;
        `;
        feedback.textContent = mensagem;
       
        document.body.appendChild(feedback);

        setTimeout(() => {
            feedback.style.animation = 'slideInRight 0.3s ease-out reverse';
            setTimeout(() => feedback.remove(), 300);
        }, 3000);
    }

    salvarDados() {
        localStorage.setItem('tutoria_notas', JSON.stringify(this.notas));
        localStorage.setItem('tutoria_chat', JSON.stringify(this.mensagens));
    }

    carregarDados() {
        // Dados já carregados no constructor
    }

    configurarEventos() {
        document.getElementById('chatInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.enviarMensagem();
            }
        });

        document.getElementById('notasText')?.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                this.salvarNota();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.fecharModal();
            }
        });

        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.fecharModal();
                }
            });
        });

        document.querySelectorAll('.btn-assistir, .btn-iniciar').forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.aula-item, .simulado-item');
                const titulo = card.querySelector('h4').textContent;
                app.mostrarFeedback(`🎯 Iniciando: ${titulo}`, 'success');
            });
        });
    }
}

// Funções globais
let app;

function abrirAulas() { app.abrirAulas(); }
function abrirSimulados() { app.abrirSimulados(); }
function abrirChat() { app.abrirChat(); }
function abrirBlocoNotas() { app.abrirBlocoNotas(); }
function abrirTutores() { app.abrirTutores(); }
function abrirProgresso() { app.abrirProgresso(); }
function abrirPerfil() { app.mostrarFeedback('👤 Perfil em desenvolvimento!', 'info'); }
function abrirSobre() { app.mostrarFeedback('ℹ️ Sobre o Tutoria', 'info'); }
function abrirAjuda() { app.mostrarFeedback('❓ Central de Ajuda', 'info'); }
function abrirConfiguracoes() { app.mostrarFeedback('⚙️ Configurações', 'info'); }
function fecharModal() { app.fecharModal(); }
function salvarNota() { app.salvarNota(); }
function limparNota() { app.limparNota(); }
function alternarHistorico() { app.alternarHistorico(); }
function enviarMensagem() { app.enviarMensagem(); }

// Inicializar app
document.addEventListener('DOMContentLoaded', () => {
    app = new AppTutoria();
});
