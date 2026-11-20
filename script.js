
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


// ==========================================
// 2. ARRAY DE OBJETOS - CORDÉIS
// ==========================================

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
        titulo: "Cordel da Lira",
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


// ==========================================
// 3. ARRAY DE OBJETOS - CONTOS
// ==========================================

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
// 4. FUNÇÃO PARA MOSTRAR OS TRABALHOS
// ==========================================

function mostrarTrabalhos() {
    const area = document.querySelector(".trabalhos");

    if (!area) return;

    area.innerHTML = "";

    trabalhos.forEach((trabalho) => {
        area.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${trabalho.nome}</h5>
                    <p class="card-text">${trabalho.descricao}</p>
                    <a href="${trabalho.link}" class="btn btn-primary">
                        Ver trabalhos
                    </a>
                </div>
            </div>
        `;
    });
}


// ==========================================
// 5. FUNÇÃO PARA MOSTRAR OS CORDÉIS
// ==========================================

function mostrarCordels(lista) {
    const area = document.querySelector(".cordéis .conteiner");

    if (!area) return;

    area.innerHTML = "";

    lista.forEach((cordel) => {
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
    });

    if (lista.length === 0) {
        area.innerHTML = "<p>Nenhum cordel encontrado.</p>";
    }
}


// ==========================================
// 6. FUNÇÃO PARA MOSTRAR OS CONTOS
// ==========================================

function mostrarContos(lista) {
    const secoes = document.querySelectorAll("main #conto");

    if (secoes.length === 0) return;

    const area = secoes[0];

    // Remove as seções repetidas com o mesmo ID
    secoes.forEach((secao, indice) => {
        if (indice > 0) {
            secao.remove();
        }
    });

    // Remove os cards antigos
    const cardsAntigos = area.querySelector(".lista-contos");

    if (cardsAntigos) {
        cardsAntigos.remove();
    }

    const listaContos = document.createElement("div");
    listaContos.className = "lista-contos";

    lista.forEach((conto) => {
        listaContos.innerHTML += `
            <div class="card conto-card">
                <div class="card-body">
                    <h5 class="card-title">${conto.titulo}</h5>
                    <p class="card-text">Autor: ${conto.autor}</p>
                    <a href="${conto.arquivo}" target="_blank"
                       class="btn btn-primary">
                        Ler conto
                    </a>
                </div>
            </div>
        `;
    });

    if (lista.length === 0) {
        listaContos.innerHTML = "<p>Nenhum conto encontrado.</p>";
    }

    area.appendChild(listaContos);
}


// ==========================================
// 7. PESQUISA DE CORDÉIS COM FILTER E FIND
// ==========================================

function pesquisarCordel() {
    const campo = document.querySelector("#pesquisa-cordel");

    if (!campo) return;

    campo.addEventListener("input", function () {
        const pesquisa = campo.value.toLowerCase().trim();

        const resultado = cordels.filter((cordel) => {
            return (
                cordel.titulo.toLowerCase().includes(pesquisa) ||
                cordel.autor.toLowerCase().includes(pesquisa)
            );
        });

        // Procura uma correspondência exata
        const encontrado = cordels.find((cordel) =>
            cordel.titulo.toLowerCase() === pesquisa
        );

        mostrarCordels(resultado);
    });
}


// ==========================================
// 8. PESQUISA DE CONTOS COM FILTER E FIND
// ==========================================

function pesquisarConto() {
    const campo = document.querySelector("#pesquisa-conto");

    if (!campo) return;

    campo.addEventListener("input", function () {
        const pesquisa = campo.value.toLowerCase().trim();

        const resultado = contos.filter((conto) => {
            return (
                conto.titulo.toLowerCase().includes(pesquisa) ||
                conto.autor.toLowerCase().includes(pesquisa)
            );
        });

        // Procura uma correspondência exata
        const encontrado = contos.find((conto) =>
            conto.titulo.toLowerCase() === pesquisa
        );

        mostrarContos(resultado);
    });
}


// ==========================================
// 9. CRIAR CAMPOS DE PESQUISA
// ==========================================

function criarPesquisas() {
    const areaCordel = document.querySelector(".cordéis .conteiner");

    if (areaCordel && !document.querySelector("#pesquisa-cordel")) {
        const campo = document.createElement("input");

        campo.type = "text";
        campo.id = "pesquisa-cordel";
        campo.placeholder = "Pesquisar cordel por título ou autor...";
        campo.className = "form-control mb-3";

        areaCordel.parentNode.insertBefore(campo, areaCordel);
    }

    const areaConto = document.querySelector("main #conto");

    if (areaConto && !document.querySelector("#pesquisa-conto")) {
        const campo = document.createElement("input");

        campo.type = "text";
        campo.id = "pesquisa-conto";
        campo.placeholder = "Pesquisar conto por título ou autor...";
        campo.className = "form-control mb-3";

        areaConto.prepend(campo);
    }
}


// ==========================================
// 10. MENU RESPONSIVO
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
// 11. ESTILO DO MENU RESPONSIVO
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
            }
        }
    `;

    document.head.appendChild(estilo);
}


// ==========================================
// 12. MODO ESCURO
// ==========================================

function criarModoEscuro() {
    if (document.querySelector("#botao-tema")) return;

    const botao = document.createElement("button");

    botao.id = "botao-tema";
    botao.textContent = "🌙 Modo escuro";
    botao.className = "btn btn-secondary";

    document.body.appendChild(botao);

    botao.addEventListener("click", function () {
        document.body.classList.toggle("tema-escuro");

        if (document.body.classList.contains("tema-escuro")) {
            botao.textContent = "☀️ Modo claro";
        } else {
            botao.textContent = "🌙 Modo escuro";
        }
    });

    const estilo = document.createElement("style");

    estilo.textContent = `
        body.tema-escuro {
            background-color: #17212b;
            color: white;
        }

        body.tema-escuro .card {
            background-color: #263746;
            color: white;
        }

        body.tema-escuro a {
            color: #9bd5ff;
        }
    `;

    document.head.appendChild(estilo);
}


// ==========================================
// 13. INICIALIZAÇÃO DO SITE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    configurarMenu();

    mostrarTrabalhos();

    mostrarCordels(cordels);

    mostrarContos(contos);

    criarPesquisas();

    pesquisarCordel();

    pesquisarConto();

    criarMenuResponsivo();

    criarModoEscuro();

});
