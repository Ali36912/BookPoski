new Swiper('.book-slider', {
    slidesPerView: 5,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
        1920:{
            slidesPerView: 5,
        },
        1680:{
            slidesPerView:  5,
        },
        1600:{
            slidesPerView: 5,
        },
        1440:{
            slidesPerView:  5,
        },
        1366:{
            slidesPerView: 4,
        },
        1280:{
            slidesPerView: 4,
        },
        414:{
            slidesPerView: 1.5,
        },
        393:{
            slidesPerView: 1.5,
        },
        375:{
            slidesPerView: 1.5,
        },
    }
}),

new Swiper('.sub-slider', {
    breakpoints: {
        1920:{
            slidesPerView: 3,
        },
        1680:{
            slidesPerView:  3,
        },
        1600:{
            slidesPerView: 3,
        },
        1440:{
            slidesPerView:  3,
        },
        1366:{
            slidesPerView: 3,
        },
        1280:{
            slidesPerView: 3,
        },
        414:{
            slidesPerView: 1,
            grabCursor: true,
        },
    }
})