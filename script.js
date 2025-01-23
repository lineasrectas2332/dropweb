// Seleccionar elementos
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.hamburger'); // Botón de hamburguesa
const navLinks = document.querySelector('.mobile-menu'); // Menú desplegable
const links = document.querySelectorAll('.mobile-menu a'); // Enlaces dentro del menú

// Verificar si los elementos existen antes de manipularlos
if (menuToggle && navLinks) {
    // Detectar scroll y cambiar la navbar
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mostrar/ocultar el menú hamburguesa
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');

        // Cambiar el ícono de hamburguesa
        const isOpen = navLinks.classList.contains('active');
        menuToggle.innerHTML = isOpen 
            ? '<svg width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
            : '<svg width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16"/></svg>';
    });

    // Cerrar el menú al hacer clic en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}
