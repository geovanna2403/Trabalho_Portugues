document.addEventListener("DOMContentLoaded", () => {

    // MENU RESPONSIVO
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    // FECHAR MENU AO CLICAR EM UM LINK
    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu?.classList.remove("active");
        });
    });

    // DESTACAR PÁGINA ATUAL NO MENU
    const currentPage = window.location.pathname;

    menuLinks.forEach(link => {
        const linkPage = new URL(link.href).pathname;

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    // ANIMAÇÃO AO APARECER NA TELA
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    // ANIMAÇÃO DOS CARDS
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });

    // BOTÃO VOLTAR AO TOPO
    const topButton = document.querySelector("#backToTop");

    if (topButton) {
        window.addEventListener("scroll", () => {
            topButton.style.display =
                window.scrollY > 300 ? "block" : "none";
        });

        topButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // ANO AUTOMÁTICO NO RODAPÉ
    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // MENSAGEM DE BOAS-VINDAS
    console.log("Bem-vindo(a) ao nosso projeto de Português!");

});