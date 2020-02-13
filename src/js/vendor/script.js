const btnMenu = document.querySelector('.c-menu__button');
const listMenu = document.querySelector('.c-menu__list');

btnMenu.addEventListener('click', () => {
    listMenu.classList.toggle('c-menu__list--active');
    btnMenu.classList.toggle('c-menu__button--active');
    // $('.c-menu__list').slideToggle();

    if (btnMenu.classList.contains('c-menu__button--active')) {
        showMenu();
    } else {
        closeMenu();
    }
})

const showMenu = () => {
    btnMenu.setAttribute("aria-label", "Close");
    btnMenu.setAttribute("aria-expanded", "true");
    btnMenu.setAttribute("title", "Close menu");
    document.querySelector("main").classList.add("blur");
}

const closeMenu = () => {
    btnMenu.setAttribute("aria-label", "Open");
    btnMenu.setAttribute("aria-expanded", "false");
    btnMenu.setAttribute("title", "Open menu");
    document.querySelector("main").classList.remove("blur");
}


// Menu scroll

$(document).scroll(() => {
    const scrollValue = $(this).scrollTop();
    const windowHeight = $(window).height();


    if (scrollValue > 100) {
        $('.l-header').css("background-color", "#e88783");
    } else {
        $('.l-header').css("background-color", "transparent");
    }
})


// buttons