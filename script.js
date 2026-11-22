

// ==========================================
// 1. ARRAY DE OBJETOS - TRABALHOS DO SITE
// ==========================================

const trabalhos = [
   {
     nome: "Contos",
        descricao: "Conheça nossas produções de contos.",
        link: "conto.html"
   },
    {
        nome: "Cordéis",
        descricao: "Conheça nossas produções de cordéis.",
        link: "cordel.html"
    },
    {
        nome: "Resenhas",
        descricao: "Conheça nossas produções de resenhas.",
        link: "resenha.html"
    },
    {
        nome: "Reportagens",
        descricao: "Conheça nossas produções de reportagens.",
        link: "reportagem.html"
    }
];



//--- 1. array de objetos - cordéis ---//

const cordels = [
    {
        autor: "Luís Felipe",
        titulo: "Cordel dos artigos 12, 19 e 24",
        arquivo: "Cordéis/LuísFelipeMoreno_cordel.pdf"
    },
    {
        autor: "Giovanna Fernandes",
        titulo: "Cordel do artigo 19",
        arquivo: "Cordéis/GiovannaFernandes_cordel.pdf"
    },
    {
        autor: "Maria Eduarda Lira",
        titulo: "Cordel do artigo 24",
        arquivo: "Cordéis/MariaEduardeLira_cordel.pdf"
    },
    {
        autor: "Marina",
        titulo: "Cordel da Marina",
        arquivo: "Cordéis/MarinaMatos_cordel.pdf"
    },
    {
        autor: "Rhuan Fonseca",
        titulo: "Cordel do artigo 4",
        arquivo: "Cordéis/RhuanFonseca_cordel.pdf"
    },
    {
        autor: "Geovanna Vital",
        titulo: "Resumo de todos os artigos",
        arquivo: "Cordéis/GeovanaVitalCorrigido_cordel.pdf"
    }
];

//--- 2. array de objetos - contos ---//

const contos = [
    {
        autor: "Geovanna Vital",
        titulo: "Conto de Geovanna",
        arquivo: "Contos/GeovanaVital_conto.pdf"
    },
    {
        autor: "Marina Perera",
        titulo: "Conto de Marina",
        arquivo: "Contos/MarinaMatos_conto.pdf"
    },
    {
        autor: "Maria Eduarda",
        titulo: "Conto de Maria Eduarda",
        arquivo: "Contos/MariaLira_conto.pdf"
    },
    {
        autor: "Giovanna Fernandes",
        titulo: "Conto de Giovanna",
        arquivo: "Contos/Conto-GiovannaFernandes.pdf"
    },
    {
        autor: "Rhuan Fonseca",
        titulo: "Conto de Rhuan",
        arquivo: "Contos/RhuanFonseca_conto.pdf"
    },
    {
        autor: "Luis Felipe Moreno",
        titulo: "Conto de Luis Felipe",
        arquivo: "Contos/Luis Felipe_conto (1).pdf"
    }
];

// ==========================================
// 3. FUNÇÃO PARA MOSTRAR OS TRABALHOS
// ==========================================

function mostrarTrabalhos() {
    const area = document.querySelector(".trabalhos");

    if (!area) return;

    area.innerHTML = "";
         for (let i = 0; i < trabalhos.length; i++) {
    const trabalho = trabalhos[i];

    area.innerHTML += `
        <div class="card">
            <div class="card-body">
                <h3>${trabalho.nome}</h3>
                <p>${trabalho.descricao}</p>
                <a href="${trabalho.link}" class="btn btn-primary">
                    Ver trabalhos
                </a>
            </div>
        </div>
    `;
}
}

// ==========================================
// 4. FUNÇÃO PARA MOSTRAR OS CORDÉIS
// ==========================================

function mostrarCordels(lista = cordels) {

    const area = document.querySelector(".cordéis .conteiner");

    if (!area) return;

    area.innerHTML = "";
    for (const cordel of lista) {
        area.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${cordel.titulo}</h5>
                    <p class="card-text">Autor: ${cordel.autor}</p>
                    <a href="${cordel.arquivo}" target="_blank"
                       class="btn btn-primary">
                        Ler cordel
                    </a>
                </div>
            </div>
        `;
    }
           

    if (lista.length === 0) {
        area.innerHTML = "<p>Nenhum cordel encontrado.</p>";
    }
}


// ==========================================
// 4. FUNÇÃO PARA MOSTRAR OS CONTOS
// ==========================================

function mostrarContos(lista) {
    const area = document.querySelector("#conto .conteiner");

// ==========================================
// 5. PESQUISA DE CORDÉIS COM FILTER E FIND
// ==========================================
    if (!area) return;

    area.innerHTML = "";

    lista.forEach(conto => {
        area.innerHTML += `
            <div class="conto-card">
                <h3>${conto.titulo}</h3>
                <h4>${conto.autor}</h4>
                <a href="${conto.arquivo}" target="_blank">
                    Ler conto
                </a>
            </div>
        `;
    });

    if (lista.length === 0) {
        area.innerHTML = "<p>Nenhum conto encontrado.</p>";
    }
}


//--- 5. criar campos de pesquisa ---//
function criarPesquisas() {

    const areaCordel = document.querySelector(".cordéis .conteiner");

    if (areaCordel) {
        const campo = document.createElement("input");

        campo.type = "text";
        campo.id = "pesquisa-cordel";
        campo.placeholder = "🔎 Pesquisar cordel por título ou autor...";
        campo.className = "form-control mb-3";

        areaCordel.parentNode.insertBefore(campo, areaCordel);
    }

    const areaConto = document.querySelector("#conto .conteiner");

    if (areaConto) {
        const campo = document.createElement("input");

        campo.type = "text";
        campo.id = "pesquisa-conto";
        campo.placeholder = "🔎 Pesquisar conto por título ou autor...";
        campo.className = "form-control mb-3";

        areaConto.parentNode.insertBefore(campo, areaConto);
    }
}


//---- 6. pesquisar cordéis ----//
function pesquisarCordel() {

    const campo = document.querySelector("#pesquisa-cordel");

    if (!campo) return;

    campo.addEventListener("input", function () {

        const pesquisa = campo.value.toLowerCase().trim();

const resultado = buscarCordel(pesquisa);

// Procura uma correspondência exata
const encontrado = cordels.find((cordel) =>
    cordel.titulo.toLowerCase() === pesquisa
);

          if (encontrado) {
            console.log("Cordel encontrado:", encontrado.titulo);
         }
         mostrarCordels(resultado);
      });
    }
     function buscarCordel(pesquisa) {
    const resultado = cordels.filter((cordel) => {
        return (
            cordel.titulo.toLowerCase().includes(pesquisa) ||
            cordel.autor.toLowerCase().includes(pesquisa)
        );
    });

    return resultado;
}

// ==========================================
// 6. CRIAR CAMPOS DE PESQUISA
// ==========================================


// ==========================================
// 7. PESQUISAR CONTOS
// ==========================================

function pesquisarConto() {

    const campo = document.querySelector("#pesquisa-conto");

    if (!campo) return;

    campo.addEventListener("input", function () {

        const pesquisa = campo.value.toLowerCase().trim();

        const resultado = contos.filter(conto =>
            conto.titulo.toLowerCase().includes(pesquisa) ||
            conto.autor.toLowerCase().includes(pesquisa)
        );

        mostrarContos(resultado);
    });
}

// ==========================================
// 8. MENU RESPONSIVO
// ==========================================

function criarMenuResponsivo() {
    const menu = document.querySelector(".menu-links");

    if (!menu || document.querySelector("#botao-menu")) return;

    const botao = document.createElement("button");

    botao.id = "botao-menu";
    botao.textContent = "☰";
    botao.setAttribute("aria-label", "Abrir menu");
    botao.setAttribute("aria-expanded", "false");

    menu.parentNode.insertBefore(botao, menu);

    botao.addEventListener("click", function () {
        menu.classList.toggle("menu-aberto");

        const aberto = menu.classList.contains("menu-aberto");

        botao.setAttribute("aria-expanded", aberto);
        botao.textContent = aberto ? "✕" : "☰";
    });
}

// ==========================================
// 9. ESTILO DO MENU RESPONSIVO
// ==========================================

function configurarMenu() {
    const estilo = document.createElement("style");

    estilo.textContent = `
        #botao-menu {
            display: none;
            cursor: pointer;
            font-size: 25px;
            border: none;
            background: transparent;
        }

        @media (max-width: 700px) {
            #botao-menu {
                display: block;
            }

            .menu-links {
                display: none;
                flex-direction: column;
            }

           .menu-links.menu-aberto {
          display: flex;
          position: relative;
            z-index: 1000;
            background-color: #061f54;
}
        }
    `;

    document.head.appendChild(estilo);
}

// ==========================================
// 10. MODO ESCURO
// ==========================================

function criarModoEscuro() {
    if (document.querySelector("#botao-tema")) return;

    const cabecalho = document.querySelector("header");
    if (!cabecalho) return;

    const botao = document.createElement("button");

    botao.id = "botao-tema";
    cabecalho.appendChild(botao);

    // Recupera o tema salvo
    function atualizarBotao(escuro) {
        botao.textContent = escuro ? "☀ Modo claro" : "☾ Modo escuro";
        botao.setAttribute("aria-pressed", escuro);
        botao.setAttribute(
            "aria-label",
            escuro ? "Ativar modo claro" : "Ativar modo escuro"
        );
    }

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("tema-escuro");
    }

    atualizarBotao(document.body.classList.contains("tema-escuro"));

    // Alterna o tema
    botao.addEventListener("click", function () {
        const escuro = document.body.classList.toggle("tema-escuro");

        localStorage.setItem("tema", escuro ? "escuro" : "claro");
        atualizarBotao(escuro);
    });

    // Estilos
    const estilo = document.createElement("style");

    estilo.textContent = `
        #botao-tema {
            background: linear-gradient(135deg, #1a66cc, #2699e6);
            color: #FFFDD0;
            border: 1px solid #2699e6;
            border-radius: 12px;
            padding: 10px 18px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s ease;
            white-space: nowrap;
        }

        #botao-tema:hover {
            background: #0d33b3;
            transform: translateY(-2px);
        }

        body.tema-escuro {
            background-color: #0b1729;
            color: #eaf4ff;
        }

        body.tema-escuro header,
        body.tema-escuro footer,
        body.tema-escuro .rodape {
            background-color: #071b3d;
            color: #eaf4ff;
        }

        body.tema-escuro main,
        body.tema-escuro section {
            background-color: #0b1729;
            color: #eaf4ff;
        }

        body.tema-escuro .card,
        body.tema-escuro .fotoperfil,
        body.tema-escuro .card-resenha,
        body.tema-escuro .conteudo-resenha,
        body.tema-escuro .conto-card,
        body.tema-escuro #texto1,
        body.tema-escuro #texto2,
        body.tema-escuro #conto {
            background-color: #162b45;
            color: #eaf4ff;
            border-color: #2699e6;
        }

        body.tema-escuro h1,
        body.tema-escuro h2,
        body.tema-escuro h3,
        body.tema-escuro h4,
        body.tema-escuro h5,
        body.tema-escuro h6,
        body.tema-escuro p,
        body.tema-escuro label {
            color: #eaf4ff;
        }

        body.tema-escuro a {
            color: #70c5ff;
        }

        body.tema-escuro input,
        body.tema-escuro textarea,
        body.tema-escuro select {
            background-color: #162b45;
            color: #eaf4ff;
            border: 1px solid #2699e6;
        }

        body.tema-escuro input::placeholder,
        body.tema-escuro textarea::placeholder {
            color: #b5c9dc;
        }

        body.tema-escuro .accordion-item,
        body.tema-escuro .accordion-button,
        body.tema-escuro .accordion-body {
            background-color: #162b45;
            color: #eaf4ff;
            border-color: #2699e6;
        }
            /* TEXTOS DAS CURIOSIDADES */

       body.tema-escuro .curiosidades .accordion-body p {
       background-color: #162b45;
        color: #eaf4ff;
       }

       body.tema-escuro .curiosidades .accordion-body strong,
      body.tema-escuro .curiosidades .accordion-body i {
      color: #70c5ff;
        }

        body.tema-escuro .accordion-button:not(.collapsed) {
            background-color: #1a66cc;
            color: #FFFDD0;
        }

        body.tema-escuro .btn-primary {
            background-color: #1a66cc;
            border-color: #2699e6;
            color: #FFFDD0;
        }

        body.tema-escuro .btn-secondary {
            background-color: #344b63;
            border-color: #607d99;
            color: #FFFDD0;
        }

        body.tema-escuro .menu-links a {
            color: #eaf4ff;
        }
            /* PÁGINA DE REPORTAGEM */

       body.tema-escuro .reportagem p {
       background-color: #162b45;
       color: #eaf4ff;
       border-left-color: #2699e6;
       }

     body.tema-escuro .titulo-reportagens,
     body.tema-escuro .titulo-entrevista {
    color: #70c5ff;
}
    `;

    document.head.appendChild(estilo);
}


 // ==========================================
 // 10. PESQUISA NAS PÁGINAS DE PRODUÇÕES
 // ==========================================

function configurarPesquisa(idCampo, seletorCards, idMensagem) {

    const campo = document.querySelector(`#${idCampo}`);
    const cards = document.querySelectorAll(seletorCards);
    const mensagem = document.querySelector(`#${idMensagem}`);

    if (!campo || cards.length === 0) return;

    campo.addEventListener("input", function () {

        const pesquisa = campo.value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();

        let encontrados = 0;

        cards.forEach(card => {

            const texto = card.textContent
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

            const corresponde = texto.includes(pesquisa);

            card.style.display = corresponde ? "" : "none";

            if (corresponde) {
                encontrados++;
            }
        });

        if (mensagem) {
            mensagem.textContent = encontrados === 0
                ? "Nenhum resultado encontrado."
                : "";
        }
    });
}

// ==========================================
// PESQUISA GERAL - CONTOS, CORDEIS E RESENHAS
// ==========================================

function configurarPesquisaGeral() {

    const pesquisas = [
        {
            campo: "pesquisa-contos",
            cards: "#conto .conto-card",
            mensagem: "mensagem-contos"
        },
        {
            campo: "pesquisa-cordeis",
            cards: ".listas-resenhas .card-resenha",
            mensagem: "mensagem-cordeis"
        },
        {
            campo: "pesquisa-resenhas",
            cards: ".listas-resenhas .card-resenha",
            mensagem: "mensagem-resenhas"
        }
    ];

    pesquisas.forEach(item => {

        const campo = document.getElementById(item.campo);
        const cards = document.querySelectorAll(item.cards);
        const mensagem = document.getElementById(item.mensagem);

        if (!campo || cards.length === 0) return;

        campo.addEventListener("input", function () {

            const pesquisa = campo.value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .trim();

            let encontrados = 0;

            cards.forEach(card => {

                const texto = card.textContent
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "");

                const encontrou = texto.includes(pesquisa);

                card.style.display = encontrou ? "" : "none";

                if (encontrou) {
                    encontrados++;
                }
            });

            if (mensagem) {
                mensagem.textContent = encontrados === 0
                    ? "Nenhum resultado encontrado."
                    : "";
            }

        });

    });
}

// ==========================================
// 11. INICIALIZAÇÃO DO SITE
// ==========================================


document.addEventListener("DOMContentLoaded", function () {

    configurarMenu();
    mostrarTrabalhos();
    criarMenuResponsivo();
    criarModoEscuro();
    configurarPesquisaGeral();

});