window.addEventListener('DOMContentLoaded', () => {
    const MainSlider = new Swiper('.main_slider', {
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
    })
})