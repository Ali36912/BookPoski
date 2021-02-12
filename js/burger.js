function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
            $('.bp_title').css('left','-100%');
            $('.bp_txt').css('left','-100%');
            $('.wrapper').css('left','-100%');
        } else {
            $('body').css('overflow-y', 'visible');
            $('body').css('overflow', 'visible');
            $('.bp_title').css('left','50%');
            $('.bp_txt').css('left','50%');
            $('.wrapper').css('left','50%');
        }
    }
}

burgerMenu('.burger-menu');
