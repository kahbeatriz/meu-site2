// ========================================
// INVISÍVEL - PLATAFORMA EDUCACIONAL
// ========================================

// LOGIN E CADASTRO

function abrirLogin() {
    document.getElementById("modal-login").style.display = "flex";
}

function fecharLogin() {
    document.getElementById("modal-login").style.display = "none";
}

function abrirCadastro() {
    fecharLogin();
    document.getElementById("modal-cadastro").style.display = "flex";
}

function fecharCadastro() {
    document.getElementById("modal-cadastro").style.display = "none";
}

function entrar(event) {
    event.preventDefault();
    alert("Demonstração: login recebido com sucesso!");
    fecharLogin();
}

function cadastrar(event) {
    event.preventDefault();
    alert("Cadastro demonstrativo realizado!");
    fecharCadastro();
}

// ========================================
// DISCIPLINAS E AULAS
// ========================================

const conteudos = {
    matematica: {
        nome: "Matemática",
        aulas: [
            {
                titulo: "Porcentagem",
                texto: "Porcentagem representa uma parte de um total dividido em 100. Para calcular 20% de 200, fazemos 200 x 0,20 = 40."
            },
            {
                titulo: "Equações do primeiro grau",
                texto: "São equações em que a incógnita possui expoente 1. Exemplo: x + 5 = 10. Portanto, x = 5."
            },
            {
                titulo: "Funções",
                texto: "Uma função relaciona cada elemento de um conjunto de entrada a um único elemento de saída. Um exemplo é f(x) = 2x + 3."
            }
        ]
    },

    biologia: {
        nome: "Biologia",
        aulas: [
            {
                titulo: "Citologia",
                texto: "A citologia estuda as células, suas estruturas e funções. A célula é a unidade básica estrutural e funcional dos seres vivos."
            },
            {
                titulo: "Genética",
                texto: "A genética estuda a hereditariedade e a transmissão das características dos organismos."
            },
            {
                titulo: "Ecologia",
                texto: "A ecologia estuda as relações entre os seres vivos e o ambiente em que vivem."
            }
        ]
    },

    portugues: {
        nome: "Português",
        aulas: [
            {
                titulo: "Interpretação textual",
                texto: "Interpretar um texto significa compreender suas informações, identificar ideias principais, inferências e intenções do autor."
            },
            {
                titulo: "Classes gramaticais",
                texto: "As classes gramaticais classificam as palavras conforme sua função, como substantivos, verbos, adjetivos e advérbios."
            },
            {
                titulo: "Figuras de linguagem",
                texto: "São recursos expressivos utilizados para produzir diferentes efeitos de sentido, como metáfora, comparação e ironia."
            }
        ]
    },

    geografia: {
        nome: "Geografia",
        aulas: [
            {
                titulo: "Globalização",
                texto: "A globalização intensifica as conexões econômicas, culturais, políticas e tecnológicas entre diferentes regiões do mundo."
            },
            {
                titulo: "Clima",
                texto: "O clima corresponde ao comportamento médio das condições atmosféricas de uma região observado durante longos períodos."
            },
            {
                titulo: "Geopolítica",
                texto: "A geopolítica analisa as relações de poder entre países, territórios e organizações internacionais."
            }
        ]
    },

    quimica: {
        nome: "Química",
        aulas: [
            {
                titulo: "Tabela periódica",
                texto: "A tabela periódica organiza os elementos químicos conforme seus números atômicos e propriedades."
            },
            {
                titulo: "Ligações químicas",
                texto: "As ligações químicas são interações que mantêm os átomos unidos, como as ligações iônicas e covalentes."
            },
            {
                titulo: "Reações químicas",
                texto: "São transformações nas quais substâncias iniciais dão origem a novas substâncias."
            }
        ]
    },

    fisica: {
        nome: "Física",
        aulas: [
            {
                titulo: "Cinemática",
                texto: "A cinemática estuda os movimentos dos corpos sem investigar suas causas."
            },
            {
                titulo: "Leis de Newton",
                texto: "As três leis de Newton explicam as relações entre força, massa e movimento."
            },
            {
                titulo: "Energia",
                texto: "Energia é a capacidade de produzir transformações. Pode se apresentar em diferentes formas, como cinética e potencial."
            }
        ]
    },

    historia: {
        nome: "História",
        aulas: [
            {
                titulo: "Brasil Colônia",
                texto: "O período colonial brasileiro começou em 1500 e foi marcado pela exploração econômica, pela escravização de povos indígenas e africanos e pela administração portuguesa."
            },
            {
                titulo: "Revolução Industrial",
                texto: "Iniciada na Inglaterra no século XVIII, a Revolução Industrial transformou a produção por meio das máquinas, das fábricas e de novas relações de trabalho."
            },
            {
                titulo: "Primeira Guerra Mundial",
                texto: "O conflito ocorreu entre 1914 e 1918 e envolveu disputas imperialistas, nacionalismos e alianças militares."
            }
        ]
    },

    filosofia: {
        nome: "Filosofia",
        aulas: [
            {
                titulo: "Sócrates",
                texto: "Sócrates valorizava o questionamento e o diálogo como caminhos para examinar ideias e buscar conhecimento."
            },
            {
                titulo: "Platão",
                texto: "Platão desenvolveu a teoria das ideias e refletiu sobre justiça, conhecimento e organização política."
            },
            {
                titulo: "Ética",
                texto: "A ética investiga os princípios que orientam as ações humanas e as reflexões sobre o bem e o justo."
            }
        ]
    },

    ingles: {
        nome: "Inglês",
        aulas: [
            {
                titulo: "Simple Present",
                texto: "O Simple Present é utilizado para hábitos, rotinas e fatos gerais. Exemplo: She studies every day."
            },
            {
                titulo: "Reading comprehension",
                texto: "A interpretação de textos em inglês envolve identificar o assunto, a ideia principal, o contexto e as informações implícitas."
            },
            {
                titulo: "Vocabulary",
                texto: "O vocabulário pode ser ampliado pelo estudo de palavras, expressões e seu significado dentro de diferentes contextos."
            }
        ]
    },

    artes: {
        nome: "Artes",
        aulas: [
            {
                titulo: "Renascimento",
                texto: "O Renascimento valorizou o humanismo, a ciência, a observação da natureza e novas técnicas artísticas."
            },
            {
                titulo: "Impressionismo",
                texto: "O Impressionismo explorou a luz, as cores e as impressões visuais dos artistas sobre o ambiente."
            },
            {
                titulo: "Arte brasileira",
                texto: "A arte brasileira reúne diferentes manifestações culturais, tradições populares e movimentos artísticos."
            }
        ]
    },

    sociologia: {
        nome: "Sociologia",
        aulas: [
            {
                titulo: "Cultura e sociedade",
                texto: "A cultura envolve valores, costumes, conhecimentos e práticas compartilhados por grupos sociais."
            },
            {
                titulo: "Desigualdade social",
                texto: "A desigualdade social está relacionada à distribuição desigual de renda, oportunidades, recursos e direitos."
            },
            {
                titulo: "Cidadania",
                texto: "A cidadania envolve direitos e deveres e a participação dos indivíduos na vida social e política."
            }
        ]
    },

    literatura: {
        nome: "Literatura",
        aulas: [
            {
                titulo: "Romantismo",
                texto: "O Romantismo valorizou sentimentos, subjetividade, liberdade criativa e, no Brasil, a construção de uma identidade nacional."
            },
            {
                titulo: "Realismo",
                texto: "O Realismo buscou representar a sociedade de maneira crítica, explorando comportamentos e conflitos humanos."
            },
            {
                titulo: "Modernismo",
                texto: "O Modernismo brasileiro ganhou destaque em 1922, com a Semana de Arte Moderna, defendendo inovação estética e identidade cultural."
            }
        ]
    },

    redacao: {
        nome: "Redação",
        aulas: [
            {
                titulo: "Estrutura dissertativa",
                texto: "A redação dissertativo-argumentativa apresenta introdução, desenvolvimento e conclusão."
            },
            {
                titulo: "Argumentação",
                texto: "Argumentar significa defender uma ideia por meio de justificativas, exemplos e repertórios relevantes."
            },
            {
                titulo: "Proposta de intervenção",
                texto: "No ENEM, a proposta de intervenção deve apresentar uma ação, um agente, um meio, uma finalidade e detalhamento, respeitando os direitos humanos."
            }
        ]
    }
};

function mostrarConteudo(materia) {
    const resultado = document.getElementById("resultado-busca");
    const disciplina = conteudos[materia];

    if (!disciplina) return;

    resultado.innerHTML = `
        <div class="conteudo-aula">
            <h2>${disciplina.nome}</h2>
            ${disciplina.aulas.map(aula => `
                <article class="aula-item">
                    <h3>${aula.titulo}</h3>
                    <p>${aula.texto}</p>
                </article>
            `).join("")}
        </div>
    `;

    resultado.scrollIntoView({ behavior: "smooth" });
}

// PESQUISA

function pesquisar() {
    const busca = document.getElementById("busca").value
        .trim().toLowerCase();

    const resultado = document.getElementById("resultado-busca");

    const encontrada = Object.entries(conteudos).find(
        ([chave, materia]) =>
            chave.includes(busca) ||
            materia.nome.toLowerCase().includes(busca)
    );

    if (!busca) {
        resultado.textContent = "Digite uma disciplina para pesquisar.";
        return;
    }

    if (encontrada) {
        mostrarConteudo(encontrada[0]);
    } else {
        resultado.textContent = "Nenhuma disciplina encontrada.";
    }
}

// ========================================
// BIBLIOTECA DIGITAL
// ========================================

const materiais = [
    {
        titulo: "Portal Domínio Público",
        categoria: "Livros",
        descricao: "Biblioteca de obras de domínio público.",
        link: "https://www.dominiopublico.gov.br/"
    },
    {
        titulo: "Khan Academy",
        categoria: "Aulas e exercícios",
        descricao: "Aulas gratuitas de diversas disciplinas.",
        link: "https://pt.khanacademy.org/"
    },
    {
        titulo: "Base Nacional Comum Curricular",
        categoria: "Guias de estudo",
        descricao: "Documento de referência para a educação básica.",
        link: "https://basenacionalcomum.mec.gov.br/"
    },
    {
        titulo: "Portal MEC",
        categoria: "Materiais educacionais",
        descricao: "Acesse informações e recursos educacionais.",
        link: "https://www.gov.br/mec/pt-br"
    }
];

function carregarBiblioteca() {
    const area = document.getElementById("lista-biblioteca");

    area.innerHTML = materiais.map(material => `
        <article class="card">
            <span class="tag">${material.categoria}</span>
            <h3>${material.titulo}</h3>
            <p>${material.descricao}</p>
            <a href="${material.link}" target="_blank"
               rel="noopener noreferrer">
                <button type="button">Acessar material</button>
            </a>
        </article>
    `).join("");
}

// ========================================
// BANCO DE EXERCÍCIOS
// ========================================

const questoes = [
    {
        id: 1,
        materia: "História",
        nivel: "facil",
        pergunta: "Em qual país começou a Revolução Industrial?",
        alternativas: ["França", "Inglaterra", "Brasil", "Alemanha", "Itália"],
        correta: 1,
        explicacao: "A Revolução Industrial começou a Revolução Industrial?",
        alternativas: ["França", "Inglaterra", "Brasil", "Alemanha", "Itália"],
        correta: 1,
        explicacao: "A Revolução Industrial começou na Inglaterra, no século XVIII."
    },
    {
        id: 2,
        materia: "Matemática",
        nivel: "medio",
        pergunta: "Quanto é 25% de 200?",
        alternativas: ["25", "40", "50", "75", "100"],
        correta: 2,
        explicacao: "25% equivale a 0,25. Portanto, 200 x 0,25 = 50."
    },
    {
        id: 3,
        materia: "Biologia",
        nivel: "dificil",
        pergunta: "Qual organela está diretamente relacionada à produção de ATP na respiração celular?",
        alternativas: ["Ribossomo", "Lisossomo", "Mitocôndria", "Complexo golgiense", "Núcleo"],
        correta: 2,
        explicacao: "A mitocôndria é fundamental para a produção de ATP na respiração celular."
    },
    {
        id: 4,
        materia: "Filosofia",
        nivel: "facil",
        pergunta: "Qual filósofo é associado à frase 'Só sei que nada sei'?",
        alternativas: ["Platão", "Aristóteles", "Sócrates", "Descartes", "Kant"],
        correta: 2,
        explicacao: "A frase é tradicionalmente associada a Sócrates e representa sua postura de questionamento."
    },
    {
        id: 5,
        materia: "Geografia",
        nivel: "medio",
        pergunta: "Qual processo intensifica as conexões econômicas e culturais entre países?",
        alternativas: ["Isolamento", "Globalização", "Desertificação", "Sedimentação", "Êxodo rural"],
        correta: 1,
        explicacao: "A globalização amplia as conexões entre diferentes regiões do mundo."
    },
    {
        id: 6,
        materia: "Inglês",
        nivel: "dificil",
        pergunta: "Na frase 'She has lived here for five years', qual é o tempo verbal?",
        alternativas: ["Simple Past", "Simple Present", "Present Perfect", "Future Simple", "Past Continuous"],
        correta: 2,
        explicacao: "O Present Perfect relaciona uma situação iniciada no passado ao presente."
    }
];

let questaoAtual = null;

function carregarFiltros() {
    const filtro = document.getElementById("filtro-disciplina");

    const disciplinas = [...new Set(
        questoes.map(questao => questao.materia)
    )];

    filtro.innerHTML = '<option value="todas">Todas as disciplinas</option>';

    disciplinas.forEach(disciplina => {
        filtro.innerHTML += `
            <option value="${disciplina}">${disciplina}</option>
        `;
    });
}

function mostrarQuestao() {
    const materia = document.getElementById("filtro-disciplina").value;
    const nivel = document.getElementById("filtro-dificuldade").value;

    const resultado = document.getElementById("resultado-questao");
    const area = document.getElementById("area-questao");

    const filtradas = questoes.filter(questao => {
        const materiaOK = materia === "todas" || questao.materia === materia;
        const nivelOK = nivel === "todas" || questao.nivel === nivel;

        return materiaOK && nivelOK;
    });

    resultado.textContent = "";

    if (filtradas.length === 0) {
        area.innerHTML = "<p>Nenhuma questão encontrada para esses filtros.</p>";
        return;
    }
    questaoAtual = filtradas[
        Math.floor(Math.random() * filtradas.length)
    ];

    area.innerHTML = `
        <article class="questao">
            <span class="tag">${questaoAtual.materia}</span>
            <p><strong>Dificuldade:</strong> ${questaoAtual.nivel}</p>
            <h3>${questaoAtual.pergunta}</h3>

            ${questaoAtual.alternativas.map((alternativa, indice) => `
                <label class="alternativa">
                    <input type="radio" name="resposta" value="${indice}">
                    ${String.fromCharCode(65 + indice)}) ${alternativa}
                </label>
            `).join("")}

            <button onclick="corrigirResposta()">Responder</button>
        </article>
    `;
}

function corrigirResposta() {
    const selecionada = document.querySelector(
        'input[name="resposta"]:checked'
    );

    const resultado = document.getElementById("resultado-questao");

    if (!selecionada) {
        resultado.textContent = "Selecione uma alternativa.";
        return;
    }

    if (Number(selecionada.value) === questaoAtual.correta) {
        resultado.innerHTML = `
            <p class="resposta-correta">Resposta correta!</p>
            <p>${questaoAtual.explicacao}</p>
        `;
    } else {
        resultado.innerHTML = `
            <p class="resposta-errada">Resposta incorreta.</p>
            <p>Resposta correta: ${questaoAtual.alternativas[questaoAtual.correta]}.</p>
            <p>${questaoAtual.explicacao}</p>
        `;
    }
}

// ========================================
// VESTIBULARES
// ========================================

const vestibulares = [
    {
        nome: "ENEM",
        descricao: "Exame Nacional do Ensino Médio.",
        link: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem"
    },
    {
        nome: "FUVEST",
        descricao: "Vestibular da Universidade de São Paulo.",
        link: "https://www.fuvest.br/"
    },
    {
        nome: "UNICAMP",
        descricao: "Vestibular da Universidade Estadual de Campinas.",
        link: "https://www.comvest.unicamp.br/"
    },
    {
        nome: "UNESP",
        descricao: "Vestibular da Universidade Estadual Paulista.",
        link: "https://www.vunesp.com.br/"
    },
    {
        nome: "UNIFESP",
        descricao: "Processos seletivos da Universidade Federal de São Paulo.",
        link: "https://www.unifesp.br/"
    }
];

function carregarVestibulares() {
    const area = document.getElementById("lista-vestibulares");

    area.innerHTML = vestibulares.map(vestibular => `
        <article class="card">
            <h3>${vestibular.nome}</h3>
            <p>${vestibular.descricao}</p>
            <a href="${vestibular.link}" target="_blank"
               rel="noopener noreferrer">
                <button type="button">Acessar site oficial</button>
            </a>
        </article>
    `).join("");
}

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener("DOMContentLoaded", function() {
    carregarBiblioteca();
    carregarFiltros();
    carregarVestibulares();

    const login = document.getElementById("modal-login");
    const cadastro = document.getElementById("modal-cadastro");

    window.addEventListener("click", function(event) {
        if (event.target === login) fecharLogin();
        if (event.target === cadastro) fecharCadastro();
    });
});

console.log("INVISÍVEL carregado com sucesso!");