

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


//--- 3. mostrar cordéis ---//
function mostrarCordels(lista) {
    const area = document.querySelector(".cordéis .conteiner");

    if (!area) return;

    area.innerHTML = "";

    lista.forEach(cordel => {
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


//--- 4. mostrar contos ---//
function mostrarContos(lista) {
    const area = document.querySelector("#conto .conteiner");

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

        const resultado = cordels.filter(cordel =>
            cordel.titulo.toLowerCase().includes(pesquisa) ||
            cordel.autor.toLowerCase().includes(pesquisa)
        );

        mostrarCordels(resultado);
    });
}


//---- 7. pesquisar contos ----//
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

// 8. menu responsivo //

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

// 9. estilo do menu responsivo

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

// 10. modo escuro //

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

// 11.inicialização do site //

document.addEventListener("DOMContentLoaded", function () {

    configurarMenu();

    mostrarCordels(cordels);
    mostrarContos(contos);

    criarPesquisas();

    pesquisarCordel();
    pesquisarConto();

    criarMenuResponsivo();
    criarModoEscuro();

});
