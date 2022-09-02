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
        grabCursor: true,
        centeredSlides: true,
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
        breakpoints: {
            220: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });

    const Pop_open = document.querySelector('.ost .swiper-slide-active .click');
    const Pop = document.querySelector('.ost .swiper-slide .pop');

    Pop_open.onclick = function (e) {
        e.preventDefault();

        Pop.classList.add('on');

        document.querySelector('.ost .swiper-slide .pop>i').addEventListener('click', function () {
            // console.log(this)
            Pop.classList.remove('on')
        });

        // if (Pop.classList.contains('on'))
        //     return (Pop_open.sytle.display = 'none')
    };


    const Flow_slider = new Swiper(".flow_slider", {
        loop: true,
        spaceBetween: 30,
        speed: 4000,

        autoplay: {
            delay: 1,
            enabled: true,
            disableOnInteraction: false,
        },

        breakpoints: {
            220: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 3,
            }
        }
    }
    );

    const Hover = document.querySelectorAll('.flow_slider');

    Hover.mouseover = function () {
        swiper.autoplay.stop();
    };
    Hover.mouseout = function () {
        swiper.autoplay.start();
    };


    document.querySelector('.mopen').addEventListener('click', (e) => {
        const TG = e.currentTarget;
        TG.classList.toggle('on');
        document.querySelector('header .gnb').classList.toggle('on')
    });

    // document.querySelector('.header .gnb>ul>li').addEventListener('click', function (e) {
    //     e.preventDefault();
    //     document.querySelector(this).classList.toggle('on')
    // });


});// the end

