document.addEventListener('DOMContentLoaded', function () {
    // Ajusta para garantir que o site comece no topo ao recarregar
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }

    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    // Função para exibir ou esconder os botões ao rolar a página
    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            backToTopButton.style.display = 'flex';
            whatsappButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
                whatsappButton.style.opacity = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            whatsappButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
                whatsappButton.style.display = 'none';
            }, 500);
        }
    }

    // Adiciona o evento de scroll para exibir ou esconder os botões
    document.addEventListener('scroll', toggleButtons);

    // Ação ao clicar no botão "Voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Ação ao clicar no botão do WhatsApp
    whatsappButton.addEventListener('click', function () {
        window.open('https://wa.me/51969259345?text=Hola%2C%20vengo%20de%20ricardolaurito.dev%20y%20tengo%20un%20proyecto%20o%20idea%20para%20desarrollar%20de%20forma%20incre%C3%ADble.', '_blank');
    });
});
