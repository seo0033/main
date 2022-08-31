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

    const Card_slider = new Swiper(".card_slider", {
        effect: "cards",
        grabCursor: true,
    });

    Card_slider.on('slideChangeTransitionEnd', () => {
        //console.log(Card_slider.realIndex);
        let rightBox = document.querySelectorAll('.character .right .box');
        //console.log(rightBox);
        rightBox.forEach((itm) => {
            itm.classList.remove('on')
        })
        rightBox[Card_slider.realIndex].classList.add('on');
        //let current = document.querySelector('.swiper-slide-active');
    });

    const Ost_slider = new Swiper(".ost_slider", {
        effect: "coverflow",
        // grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });

    Ost_slider.on()





});// the end