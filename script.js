document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;
    const totalItems = items.length;

    // Función para actualizar el punto activo
    function updateActiveDot(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    // Función para desplazarse al índice especificado
    function scrollToIndex(index) {
        const itemWidth = carousel.offsetWidth; // Ancho de un elemento del carrusel
        carousel.scrollTo({
            left: index * itemWidth,
            behavior: 'smooth'
        });
        updateActiveDot(index);
    }

    // Eventos para los puntos de navegación
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            scrollToIndex(index);
        });
    });

    // Evento para el botón de anterior
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        scrollToIndex(currentIndex);
    });

    // Evento para el botón de siguiente
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        scrollToIndex(currentIndex);
    });

    // Establecer el primer punto como activo por defecto
    updateActiveDot(0);

    // Desplazarse al primer elemento para centrarlo
    setTimeout(() => {
        scrollToIndex(0);
    }, 100); // Retraso para asegurar que el desplazamiento ocurre después de que el DOM esté completamente cargado
});