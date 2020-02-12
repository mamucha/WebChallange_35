const btnMenu = document.querySelector('.c-menu__button');
const listMenu = document.querySelector('.c-menu__list');

btnMenu.addEventListener('click', () => {
    // listMenu.classList.toggle('c-menu__list--active');
    $('.c-menu__list').slideToggle();
})


$(document).scroll(() => {
    const scrollValue = $(this).scrollTop();
    const windowHeight = $(window).height();

    if (windowHeight < 768) {
        if (scrollValue > 100) {
            $('.l-header').css("background-color", "#e88783");
        } else {
            $('.l-header').css("background-color", "transparent");
        }
    }

})