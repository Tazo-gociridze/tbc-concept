

new Swiper('.image-offers-slider', {
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

    pagination: {

    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        680: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },


    slidesPerView: 3,
    spaceBetween: 30,
})