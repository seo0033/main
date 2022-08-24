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

    const Tab = document.querySelectorAll('.tab_menu li');

    Tab.forEach((el, idx) => {
        el.addEventListener('click', (e) => {
            Tab.forEach(el =>
                el.classList.remove('on'));
            el.classList.add('on');

            const TAB = document.querySelectorAll('.tab_content .box');
            TAB.forEach(el => el.classList.remove('on'))
            TAB[idx].classList.add('on');
        })
    })//friend

})