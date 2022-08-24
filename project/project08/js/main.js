window.addEventListener('DOMContentLoaded', () => {
    const Main_slider = new Swiper('.main_slider', {
        loop: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
            clickable: true,
        },
    })//main_slider

    const Today = new Swiper('.pd_slider', {
        slidesPerView: 3,
        spaceBetween: 30,
    })//today

})