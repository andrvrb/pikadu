let menuToggle = document.querySelector('#menu-toggle'),
    menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event) {
    event.preventDefault();//отмена обычного события браузера (переход по ссылке)
    menu.classList.toggle('visible');
})