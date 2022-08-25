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
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 50
            }
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
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

    document.querySelector('.to_top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    });//to_top

    document.querySelector('.mopen').addEventListener('click', (e) => {
        const TG = e.currentTarget;
        TG.classList.toggle('on');
        document.querySelector('.gnb').classList.toggle('ox')
    });//mopen
});//javascript 로 쓴거...

// jQuery 로 쓴거...
$(function () {

    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.smenu').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.smenu').removeAttr('style')
    });

})//the end


