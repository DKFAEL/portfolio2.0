const scrollToTopButton = document.getElementById("scroll-to-top");

    // Função para verificar se a página foi rolada para baixo e exibir/ocultar a imagem
    function toggleScrollToTop() {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    }

    // Função para rolar a página de volta para o topo
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Adicionar evento de clique para rolar a página de volta ao topo
    scrollToTopButton.addEventListener("click", scrollToTop);

    // Adicionar evento de rolagem para mostrar/ocultar a imagem "Voltar ao topo"
    window.addEventListener("scroll", toggleScrollToTop);