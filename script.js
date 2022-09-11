AOS.init();

var rellax = new Rellax(".rellax");

var realisationSwiper = new Swiper(".realisationSwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: false,
    loop: false,
    navigation: {
        nextEl: ".realisationSwiper .swiper-button-next",
        prevEl: ".realisationSwiper .swiper-button-prev",
    },
    // pagination: {
    //     el: ".realisationSwiper .swiper-pagination",
    //     clickable: true,
    // },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    },
});