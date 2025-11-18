/* aulas.js — versão expandida
   Conteúdo: textos de estudo longos e detalhados para ensino médio,
   organizados por matéria. Substitui/atualiza o objeto `aulas` do seu projeto.
   Mantive as funções de navegação (abrirMateria, voltarMenu) para encaixar
   diretamente no seu HTML. Todos os textos foram escritos em português,
   com foco didático e exemplos práticos.
*/

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.materia-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      abrirMateria(btn.dataset.mat);
    });
  });

  document.getElementById('botao-voltar').style.display = 'none';
});

/* ====== CONTEÚDO DAS AULAS (detalhado e expandido) ======
   Textos longos, voltados ao ensino médio, com explicações passo a passo,
   exemplos, dicas de estudo e problemas para praticar mentalmente.
*/
const aulas = {
  portugues: [
    {
      titulo: "Interpretação de Texto: leitura ativa e estratégias de compreensão",
      texto:
        `Interpretação de texto vai muito além de ler as palavras: envolve estabelecer
       relações entre ideias, reconhecer intenções comunicativas e inferir informações
       que não estão escritas explicitamente. Comece pela leitura global: identifique
       tema e objetivo do autor (informar, persuadir, entreter, denunciar). Em seguida,
       faça leitura detalhada parágrafo a parágrafo, sublinhando termos-chave e conectivos
       (portanto, contudo, apesar de). Conectivos revelam estrutura argumentativa — por exemplo,
       "portanto" indica conclusão; "embora" apresenta contraste. Aprenda a distinguir fatos
       (informações verificáveis) de opiniões (juízos de valor) e a localizar evidências que
       sustentam as ideias centrais.

       Técnicas úteis: resuma cada parágrafo em 1-2 linhas; transforme o enunciado em perguntas
       que o texto responde; e use o método SQ3R (Survey, Question, Read, Recite, Review) para
       fixação. Em provas, leia as alternativas com atenção: muitas são verdadeiras isoladamente
       mas incorretas no contexto do texto. Pratique com crônicas, editoriais e questões de provas
       anteriores, buscando sempre justificar as respostas com trechos do texto.`
    },
    {
      titulo: "Figuras de linguagem e variações de sentido",
      texto:
        `Figuras de linguagem são recursos que ampliam sentidos e textura do texto. Entre as mais
       cobradas estão metáfora, comparação (símile), metonímia, sinédoque, antítese e ironia. A
       metáfora estabelece uma identidade entre termos sem o uso de conectivos: ex.: "mar de gente"
       sugere abundância; a comparação usa palavras como "como" ou "tal qual". Metonímia troca uma
       palavra por outra por contiguidade (ex.: "li Machado" para se referir às obras de Machado de
       Assis). Ao analisar, identifique o termo literal e o sentido figurado, explique a operação
       comparativa e descreva o efeito (ênfase, humor, crítica, musicalidade).

       Em leitura poética, observe também ritmo, sonoridade e imagens sensoriais. Pergunte-se: o que
       a figura revela sobre a visão de mundo do autor? Como ela contribui para o tom do texto?
       Pratique com poemas, crônicas e trechos literários; para cada figura, escreva uma frase sobre
       sua função discursiva no contexto.`
    },
    {
      titulo: "Gramática: concordância, regência, crase e pontuação",
      texto:
        `A gramática aplicada à produção e à interpretação exige domínio das regras básicas e treino
       no reconhecimento de exceções. Concordância verbal: o verbo concorda em número e pessoa com
       o sujeito — cuidado com sujeito posposto, expressões partitivas e orações reduzidas. Concordância
       nominal: adjetivos e artigos concordam em gênero e número com o substantivo que acompanham.

       Regência verbal e nominal trata da exigência de preposições (ex.: "assistir a" no sentido
       de ver; "gostar de"). Crase ocorre quando há fusão da preposição 'a' com o artigo definido 'a'
       ou pronomes que exigem 'a' (ex.: "à medida que") — pratique identificando a regência do verbo
       e a presença do artigo. Pontuação organiza o encadeamento de ideias: vírgula separa elementos
       enumerativos e orações coordenadas; evite vírgula entre sujeito e verbo. Ponto e vírgula reúne
       orações com sentido próximo; o travessão marca diálogos e insere explicações. Resolva exercícios
       contextualizados — frases soltas nem sempre mostram o uso correto.`
    }
  ],

  matematica: [
    {
      titulo: "Álgebra Básica: equações, modelagem e raciocínio algébrico",
      texto:
        `A álgebra é a linguagem que traduz situações concretas em expressões matemáticas.
       Para resolver equações do 1º grau, isole a incógnita realizando operações inversas,
       sempre preservando a igualdade. Em problemas verbais, o passo mais importante é a
       modelagem: definir variáveis com nomes claros (por exemplo, x = número de horas),
       traduzir condições em equações e validar soluções frente ao contexto (soluções negativas
       podem ser inválidas dependendo do problema).

       Resolva vários tipos: proporções, porcentagens, problemas envolvendo juros simples e
       tradução de enunciados em sistemas lineares (por exemplo, quando há duas quantidades
       relacionadas). Ao treinar, anote unidades e faça estimativas rápidas para conferir
       plausibilidade do resultado. Desenvolver flexibilidade algébrica ajuda a interpretar
       fórmulas e manipular expressões em tarefas de física, economia e química.`
    },
    {
      titulo: "Geometria e Trigonometria: medidas, semelhança e aplicações",
      texto:
        `Entender geometria é relacionar fórmulas com desenhos: área do triângulo (base × altura / 2),
       retângulo (base × altura) e círculo (π·r²) devem ser memorizadas e, principalmente, entendidas.
       Para problemas mais complexos, desenhe esquemas, marque dados conhecidos e use semelhança
       de triângulos para calcular alturas ou distâncias inacessíveis. Em trigonometria básica, reconheça
       seno, cosseno e tangente como razões entre catetos em triângulos retângulos; por exemplo, seno =
       cateto oposto / hipotenusa.

       Aplique trigonometria em problemas de ângulos de elevação, sombras e pequenas medições. Pratique
       também transformações geométricas (translação, rotação, reflexão) e relações entre perímetro,
       área e escala — ao ampliar um objeto, áreas crescem com o quadrado da razão, enquanto comprimentos
       crescem linearmente.`
    },
    {
      titulo: "Funções e gráficos: interpretar taxas de variação",
      texto:
        `Funções organizam relações entre variáveis. A função linear f(x) = ax + b descreve situações
       com taxa de variação constante: 'a' indica quanto f(x) muda quando x aumenta uma unidade;
       'b' indica o valor inicial. Para interpretar gráficos, observe inclinação, interceptos e crescimento
       ou decrescimento. Em contextos aplicados, traduza gráficos em frases: "entre x1 e x2 a variável
       cresce em média y unidades por unidade de x".

       Estude também funções quadráticas e seu vértice (máximo ou mínimo) — úteis para modelar trajetórias
       e problemas de otimização simples. Treinar leitura crítica de gráficos evita equívocos comuns, como
       confundir correlação com causalidade. Faça exercícios que peçam a construção do gráfico a partir de
       uma tabela e a leitura de valores percentuais e variações relativas.`
    }
  ],

  historia: [
    {
      titulo: "Brasil Colonial: economia, escravidão e organização social",
      texto:
        `O Brasil Colônia foi marcado por economias de exportação (plantation) e por uma sociedade profundamente
       desigual. Entender o ciclo do açúcar, a organização por capitanias e a transição para o sistema
       de governo-geral ajuda a compreender instituições que perduraram. A escravidão africana foi central:
       moldou relações de trabalho, cultura e resistência. Analise as diferentes formas de resistência —
       revoltas, quilombos, fuga e preservação cultural — e como elas influenciaram a formação social.

       Ao estudar, conecte aspectos econômicos às transformações demográficas e ambientais: produção de açúcar
       demandou mão de obra intensiva e expandiu a monocultura, alterando padrões de uso do solo. Para provas,
       pratique explicando causas e consequências de eventos (por exemplo, por que a mineração deslocou o
       eixo econômico para o Sudeste no século XVIII).` 
    },
    {
      titulo: "Revolução Industrial: tecnologia, trabalho e urbanização",
      texto:
        `A Revolução Industrial alterou modos de produção, acelerou urbanização e modificou relações de trabalho.
       Mecanização, uso do carvão e depois do vapor permitiram produção em escala; isso atraiu trabalhadores
       rurais às cidades e originou o operariado industrial. Condições de trabalho muitas vezes eram duras:
       longas jornadas, baixos salários, trabalho infantil e ambientes inseguros.

       Como resultado, surgiram movimentos trabalhistas e propostas de regulação do trabalho (sindicatos,
       legislação social). Estude também impactos ambientais e imigratórios: poluição nas cidades industriais e
       movimentos migratórios em busca de emprego. Relacione avanços tecnológicos às mudanças sociais e políticas
       do século XIX.`
    },
    {
      titulo: "República e século XX no Brasil: processos políticos e sociais",
      texto:
        `A história republicana brasileira é marcada por transições e tensões entre oligarquias regionais,
       movimentos de modernização e rupturas autoritárias. A Proclamação (1889) abriu caminho para a chamada
       República Velha, dominada pelas elites agrárias. No século XX, a Era Vargas trouxe industrialização e
       legislação trabalhista; o regime militar (1964–1985) impôs censura e repressão, mas também promoveu
       projetos de modernização econômica. A redemocratização e a Nova República implicaram reformas e debates
       sobre justiça social e participação política.

       Ao estudar esse período, relacione programas econômicos a seus efeitos sociais (ex.: industrialização
       e urbanização) e analise como setores organizados influenciaram a agenda política (sindicatos, movimentos
       estudantis). Pratique contextualizando documentos e fontes históricas.`
    }
  ],

  geografia: [
    {
      titulo: "Relevo e formação do território: processos e impactos",
      texto:
        `O relevo brasileiro resulta de milhões de anos de processos tectônicos e erosivos: escudos cristalinos,
       bacias sedimentares e dobramentos moldaram a paisagem. Identificar planaltos, planícies e depressões permite
       entender distribuição de solos, recursos minerais e padrões de ocupação humana. Por exemplo, relevos mais
       acidentados limitam a mecanização agrícola mas podem concentrar recursos minerais.

       Ao estudar mapas, relacione altitudes com usos do solo e hidrografia; observe como a topografia influencia
       circulação, transporte e riscos naturais (deslizamentos). Exercícios: interprete mapas e explique como o
       relevo condiciona atividades econômicas locais.`
    },
    {
      titulo: "Clima, biomas e interação humana",
      texto:
        `O Brasil apresenta grande diversidade climática e de biomas (Amazônia, Cerrado, Caatinga, Mata Atlântica,
       Pampa e Pantanal), cada qual com padrões próprios de precipitação, temperatura e vegetação. Entender fatores
       que determinam o clima — latitude, altitude, massas de ar, correntes oceânicas e relevo — ajuda a explicar
       distribuição de biomas e atividades econômicas predominantes.

       Estude também impactos humanos: desmatamento, alterações no ciclo hidrológico e perda de biodiversidade.
       Em debates atuais, relacione conservação e desenvolvimento sustentável, avaliando políticas públicas e suas
       implicações. Pratique identificando exceções e variabilidades locais.`
    },
    {
      titulo: "Dinâmica populacional e urbanização: indicadores e desafios",
      texto:
        `A transição demográfica descreve a passagem de altas taxas de natalidade e mortalidade para níveis mais baixos,
       alterando estrutura etária da população. Urbanização acelerada traz desafios: habitação inadequada, transporte
       congestionado, poluição e desigualdades socioespaciais. Indicadores importantes: taxa de natalidade, mortalidade,
       migração interna, densidade demográfica e índice de Gini (desigualdade).

       Ao estudar políticas urbanas, analise soluções integradas — planejamento urbano, transporte público eficiente,
       saneamento e habitação social — e como elas atuam sobre qualidade de vida. Pratique interpretando dados estatísticos
       e gráficos demográficos.`
    }
  ],

  fisica: [
    {
      titulo: "Mecânica: leis de Newton e resolução de problemas",
      texto:
        `As leis de Newton formam a base da mecânica clássica. A primeira lei (inércia) explica por que corpos em
       movimento tendem a permanecer em movimento na ausência de forças resultantes; a segunda lei, F = m·a, é a
       relação quantitativa entre força, massa e aceleração; a terceira lei estabelece que forças surgem aos pares
       (ação e reação). Para resolver problemas, desenhe diagramas de corpo livre, identifique forças (peso, normal,
       tração, atrito) e escreva somas vetoriais separadas por eixos.

       Exemplos práticos: analisar a aceleração de um carrinho numa rampa inclinada, calcular força de atrito máxima
       ou equilibrar forças em sistemas estáticos. Treine decomposição de vetores e aplique equações de movimento para
       prever posições e velocidades.`
    },
    {
      titulo: "Energia e trabalho: conceitos e aplicações",
      texto:
        `Trabalho (W) = força · deslocamento (na direção da força) é a grandeza que quantifica energia transferida.
       Energia cinética (½mv²) depende da velocidade; energia potencial (mgh) depende da posição em campo gravitacional.
       A conservação de energia permite resolver problemas em que forças conservativas (como gravidade) atuam: a soma
       de energia cinética e potencial permanece constante em sistemas isolados.

       Em contextos de engenharia e física aplicada, identifique perdas por atrito e converta energia mecânica em outras
       formas (calor, som). Resolva exercícios envolvendo queda livre, lançamento vertical e sistemas de massas e molas.`
    },
    {
      titulo: "Óptica: reflexão, refração e formação de imagens",
      texto:
        `Óptica geométrica estuda como raios de luz se comportam em superfícies e meios distintos. A lei da reflexão afirma
       igualdade entre ângulo de incidência e reflexão; a refração obedece à lei de Snell (n1·sinθ1 = n2·sinθ2) e descreve
       a mudança de direção quando a luz entra em outro meio. Lentes convergentes e divergentes formam imagens reais ou
       virtuais dependendo da posição do objeto em relação à distância focal.

       Experimentos simples com prismas mostram dispersão (separação das cores) e explicam fenômenos cotidianos. Para
       fixar, resolva problemas de formação de imagem por espelhos e lentes, calculando distâncias e ampliação.`
    }
  ],

  quimica: [
    {
      titulo: "Estrutura atômica, modelos e tabela periódica",
      texto:
        `A química começa no átomo: prótons (carga positiva), nêutrons (massa) e elétrons (carga negativa) definem
       identidade e comportamento. O número atômico (Z) determina o elemento; a configuração eletrônica explica
       tendências químicas: elementos com elétrons de valência semelhantes se comportam de maneira parecida.
       A tabela periódica organiza elementos por número atômico e propriedades periódicas (raio atômico, eletronegatividade,
       energia de ionização).

       Para estudar, pratique escrever configurações eletrônicas, identificar família e prever comportamento químico
       básico (metais tendem a perder elétrons; ametais tendem a ganhar). Relações periódicas ajudam a justificar
       reatividade e propriedades físicas.`
    },
    {
      titulo: "Ligações químicas e propriedades das substâncias",
      texto:
        `Ligações iônicas ocorrem por transferência de elétrons entre átomos com grande diferença de eletronegatividade;
       o resultado são redes cristalinas com altos pontos de fusão. Ligações covalentes envolvem compartilhamento de
       elétrons e formam moléculas com geometrias variadas — preveja-as com a teoria VSEPR (repulsão de pares eletrônicos).
       Ligações polares surgem quando elétrons são compartilhados desigualmente, criando dipolos.

       A natureza da ligação influencia propriedades como solubilidade, condutividade e ponto de fusão. Pratique
       identificando o tipo de ligação e relacionando-o às propriedades observáveis.`
    },
    {
      titulo: "Reações químicas, balanceamento e estequiometria",
      texto:
        `Equações químicas descrevem transformações; balancear respeita conservação de massa. Identifique reagentes,
       produtos e estados físicos quando fornecido. Em estequiometria, use coeficientes estequiométricos para calcular
       massas ou volumes de reagentes necessários e rendimento teórico. Reconheça reagentes limitantes que definem a
       quantidade máxima de produto.

       Tipos de reações (síntese, decomposição, simples e dupla troca, oxirredução) têm padrões que facilitam a previsão
       de produtos. Treine com problemas quantitativos e análise de rendimento experimental.`
    }
  ],

  biologia: [
    {
      titulo: "Células: estrutura, função e organização biológica",
      texto:
        `A célula é a unidade estrutural e funcional da vida. Distinga procariotos (sem núcleo delimitado) de eucariotos
       (com núcleo e organelas). Conheça organelas-chave: mitocôndrias (produção de ATP), retículo endoplasmático
       (síntese de proteínas e lipídios), complexo de Golgi (modificação e tráfego), lisossomos (digestão intracelular)
       e cloroplastos (fotossíntese em plantas).

       Relacione estrutura e função: por exemplo, a presença de muitos ribossomos indica alta síntese proteica. Estude
       também transporte membranar (difusão, osmose, transporte ativo) e como desequilíbrios osmóticos afetam células.
       Pratique com esquemas celulares e com perguntas do tipo "o que aconteceria se..." para desenvolver raciocínio
       experimental.`
    },
    {
      titulo: "Fotossíntese e respiração: ciclos e balanço energético",
      texto:
        `Fotossíntese (em plantas e algas) transforma energia luminosa em energia química: ocorre em cloroplastos e
       envolve reações fotoquímicas (fase clara) e fixação de carbono (ciclo de Calvin). Respiração celular converte
       glicose em ATP via glicólise, ciclo de Krebs e cadeia respiratória — processo essencial para quase todos os
       organismos aeróbicos.

       Compare eficiência energética, entradas e saídas de cada processo; entenda também como estas vias se integram
       em ecossistemas (fluxo de energia) e como fatores ambientais (luz, temperatura) influenciam taxas fotossintéticas
       e respiratórias.`
    },
    {
      titulo: "Genética mendeliana e biologia molecular básica",
      texto:
        `Genética começa com genes e alelos: mendeliana clássica explica segregação e dominância através de cruzamentos
       monohíbridos e dihíbridos (uso do quadro de Punnett). Conceitos-chave: genótipo vs. fenótipo, dominância completa,
       recessividade e herança ligada ao sexo.

       A biologia molecular traz noções de DNA, RNA e síntese proteica (transcrição e tradução). Entenda como mudanças
       na sequência de DNA (mutações) podem alterar proteínas e originar variabilidade ou doenças. Faça exercícios de
       probabilidade genética e leia pequenos textos sobre tecnologias modernas (como PCR e sequenciamento) para ligar teoria
       à prática.`
    }
  ],

  filosofia: [
    {
      titulo: "Filosofia antiga: principais ideias e problema do conhecimento",
      texto:
        `A filosofia antiga introduz questões fundamentais: o que é conhecimento, justiça e virtude? Sócrates,
       com sua maiêutica, valorizou o questionamento; Platão formulou a teoria das ideias (formas abstratas que
       conferem sentido às coisas sensíveis); Aristóteles sistematizou lógica e ética com foco na observação do mundo
       e na busca da virtude como meio-termo.

       Ao estudar, compare argumentos: por exemplo, como Platão distingue aparência e realidade na alegoria da caverna?
       Pratique construindo resumos curtos e avaliando premissas e conclusões dos pensadores. Isso prepara para análises
       éticas e epistemológicas posteriores.`
    },
    {
      titulo: "Epistemologia: fontes e limites do conhecimento",
      texto:
        `Epistemologia investiga o que podemos conhecer e como justificamos crenças. Duas correntes clássicas: empirismo
       (conhecimento a partir da experiência) e racionalismo (razão como fonte primordial). Kant buscou mediar essas
       posições, argumentando que a experiência é estruturada por categorias mentais.

       Em exercícios, identifique argumentos a favor e contra confiança em sentidos, intuição ou dedução lógica. Use
       exemplos concretos para testar teorias do conhecimento e aprenda a distinguir crença justificada de opinião.`
    },
    {
      titulo: "Ética aplicada: teorias e dilemas morais",
      texto:
        `Ética normativa oferece ferramentas para avaliar ações: teorias consequencialistas (utilitarismo) pesam consequências;
       teorias deontológicas (Kant) enfatizam princípios e deveres. Em dilemas morais (ex.: salvar muitos X salvar poucos),
       aplique argumentos de cada perspectiva e destaque trade-offs.

       Pratique analisando casos contemporâneos (bioética, tecnologia) e escrevendo respostas que articulem premissas,
       justificativas e possíveis objeções — habilidade útil para redações argumentativas e debate.`
    }
  ],

  sociologia: [
    {
      titulo: "Sociedade e cultura: formação de identidades e normas",
      texto:
        `Sociedade é conjunto organizado de indivíduos; cultura engloba valores, normas, linguagens e práticas simbólicas.
       Socialização é o processo que integra indivíduos a esses padrões, mediado por família, escola, mídia e grupos de pares.
       Analise como identidades sociais (classe, gênero, etnia) se formam e são reproduzidas.

       Use estudos de caso para identificar normas explícitas e implícitas e como a mídia molda representações sociais.
       Desenvolva capacidade crítica para interpretar discursos e relações de poder.`
    },
    {
      titulo: "Estratificação social e mobilidade: indicadores e explicações",
      texto:
        `Estratificação descreve camadas sociais baseadas em riqueza, educação e prestígio. Mobilidade social indica possibilidade
       de mudança entre estratos — ascendente ou descendente. Analise fatores que favorecem mobilidade (educação, políticas públicas)
       e barreiras (discriminação, herança de capital).

       Aprenda a interpretar índices (Gini, taxa de pobreza) e a relacionar desigualdade a políticas públicas e oportunidades econômicas.`
    },
    {
      titulo: "Movimentos sociais e mudança: estratégias e resultados",
      texto:
        `Movimentos sociais organizam demandas por mudança (direitos trabalhistas, igualdade de gênero, proteção ambiental).
       Estude formas de ação (protestos, advocacy, litígio) e como mídia e redes sociais amplificam ou fragmentam agendas.
       Analise exemplos históricos e recentes para identificar estratégias eficazes e limites institucionais.

       Exercício: descreva um movimento social local ou nacional, identifique atores, repertório de ação e impactos alcançados.`
    }
  ],

  literatura: [
    {
      titulo: "Panorama histórico da literatura brasileira",
      texto:
        `A literatura brasileira dialoga com transformações sociais e políticas: do barroco religioso à busca por identidade
       nacional no Modernismo e às experimentações contemporâneas. Estude autores centrais por movimento (ex.: Machado de
       Assis, Clarice Lispector, Mário de Andrade) e observe como contexto histórico molda temas e formas. Leia trechos com
       atenção a voz narrativa, tempo e conflitos sociais retratados.

       Para fixar, faça linhas do tempo relacionando movimentos literários a eventos históricos e escreva breves análises
       comparativas entre autores.`
    },
    {
      titulo: "Gêneros literários e estruturas narrativas",
      texto:
        `Compreender gêneros (poesia, prosa, drama) envolve reconhecer convenções — por exemplo, a expectativa de tempo e
       enredo no romance, a intensidade imagética no poema. Análise narrativa investiga foco narrativo, confiabilidade do
       narrador e construção de personagens. Em contos, observe economia de linguagem; em romances, desenvolvimento e arcos
       psicológicos.

       Pratique descrevendo quem conta a história, por que essa escolha afeta a recepção e como a linguagem contribui para
       significados subjacentes.`
    },
    {
      titulo: "Leitura crítica de poesia e prosa: técnicas de interpretação",
      texto:
        `Poemas exigem sensibilidade à sonoridade, ritmo e imagens; prosa demanda atenção a enredo, perspectiva e diálogo.
       Ferramentas úteis: sublinhar repetições, identificar metáforas-chave e mapear relações causais e temporais. Produza
       pequenas sínteses que expliquem como forma e conteúdo se articulam.

       Exercício prático: escolha um poema curto e escreva em 5 linhas o efeito emocional que cada estrofe produz e por que.`
    }
  ]
};

/* Abre tela com aulas da matéria escolhida (mostra area de conteudo rodável) */
function abrirMateria(materia) {
  const menu = document.getElementById('menu');
  const conteudo = document.getElementById('conteudo');
  const titulo = document.getElementById('tituloTela');
  const botaoVoltar = document.getElementById('botao-voltar');

  menu.style.display = 'none';
  conteudo.style.display = 'block';
  botaoVoltar.style.display = 'block';

  titulo.textContent = materia.charAt(0).toUpperCase() + materia.slice(1);

  let html = `<div class="voltar-card"><button class="voltar-btn" onclick="voltarMenu()">← Voltar ao menu</button></div>`;
  html += `<h2>Aulas de ${titulo.textContent}</h2>`;

  const listaAulas = aulas[materia];
  if (!listaAulas) {
    html += `<p>Conteúdo ainda não disponível para esta matéria.</p>`;
  } else {
    listaAulas.forEach((aula, idx) => {
      html += `
        <article class="aula" id="${materia}-aula-${idx+1}">
          <h3>${idx+1}. ${aula.titulo}</h3>
          <p>${aula.texto}</p>
        </article>
      `;
    });
  }

  html += `<div style="text-align:center; margin-top:12px;">
             <small>Use este conteúdo como base de estudo. Consulte livros didáticos, cadernos e professores para
             aprofundar e praticar com exercícios.</small>
           </div>`;

  conteudo.innerHTML = html;
  conteudo.scrollTop = 0;
}

/* Volta ao menu principal */
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
