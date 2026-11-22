

// ==========================================
//  ARRAY DE OBJETOS - TRABALHOS DO SITE
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



// ==========================================
//  FUNÇÃO PARA MOSTRAR OS TRABALHOS
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
//  MENU RESPONSIVO
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
//  ESTILO DO MENU RESPONSIVO
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
//  MODO ESCURO
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
        const cards = Array.from(document.querySelectorAll(item.cards));
        const mensagem = document.getElementById(item.mensagem);

        if (!campo || cards.length === 0) return;

        campo.addEventListener("input", function () {

            const pesquisa = campo.value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .trim();

            // FILTER: seleciona todos os cards que correspondem à pesquisa
            const encontrados = cards.filter(card => {
                const texto = card.textContent
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "");

                return texto.includes(pesquisa);
            });

            // FIND: procura o primeiro card que corresponde à pesquisa
            const primeiroEncontrado = cards.find(card => {
                const texto = card.textContent
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "");

                return texto.includes(pesquisa);
            });

            // Mostra os resultados encontrados e esconde os outros
            cards.forEach(card => {
                card.style.display = encontrados.includes(card) ? "" : "none";
            });

            if (mensagem) {
                mensagem.textContent = primeiroEncontrado
                    ? ""
                    : "Nenhum resultado encontrado.";
            }

        });

    });
}

// ==========================================
//  INICIALIZAÇÃO DO SITE
// ==========================================


document.addEventListener("DOMContentLoaded", function () {

    configurarMenu();
    mostrarTrabalhos();
    criarMenuResponsivo();
    criarModoEscuro();
    configurarPesquisaGeral();

});