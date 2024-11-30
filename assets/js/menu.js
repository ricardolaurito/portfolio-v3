document.addEventListener('DOMContentLoaded', function () {
    // Elementos de controle do menu
    const menuToggle = document.getElementById('menuToggle');
    const menuAberto = document.querySelector('.menu-aberto');
    const menuLinks = document.querySelectorAll('.menu-aberto a');

    // Abre/fecha o menu ao mudar o estado do checkbox
    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menuAberto.classList.add('active');
        } else {
            menuAberto.classList.remove('active');
        }
    });

    // Fecha o menu ao clicar em qualquer link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.checked = false;
            menuAberto.classList.remove('active');
        });
    });
});
