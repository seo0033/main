window.addEventListener('DOMContentLoaded', () => {

    const Main_slider = new Swiper(".main_slider", {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
            clickable: true,
        },
    });

});// the end