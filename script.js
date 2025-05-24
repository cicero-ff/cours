document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');

    // Обработчик клика по гамбургеру
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        // Можно добавить затемнение фона или overlay, если нужно
        document.querySelector('.menu-overlay').classList.toggle('active');
        document.body.classList.toggle('menu-open'); // отключение прокрутки
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.header-content') && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            document.querySelector('.menu-overlay').classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            document.querySelector('.menu-overlay').classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});