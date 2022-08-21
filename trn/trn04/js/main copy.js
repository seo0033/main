window.addEventListener('DOMContentLoaded', () => {
    const H1 = document.querySelector('h1');
    //= $('h1')

    // H1.innerText = `나는 
    // 놀러갈끄야~~`
    // innerText : 줄바꿈 자동완성

    const TOGGLE = function () {
        this.classList.toggle('on')
    }
    H1.addEventListener('click', TOGGLE)
    // 변수 : 대문자 (통상적)
    // 화살표함수 : this 호환 X

    // H1.addEventListener('click', e => {
    //     e.currentTarget.style.color = `blue`
    // })

    // H1.addEventListener('click', () => {
    //     H1.style.color = `blue`
    // })


    const ddd = new Swiper('.ddd', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        on: {
            //     init: function () {
            //         console.log('swiper initialized');
            //     },
            slideChangeTransitionEnd: function () {
                console.log(this.slides.length, this.realIndex);
                // console.log(document.querySelectorAll('.swiper-slide'),document.querySelector('.swiper-slide-active'));
                document.querySelectorAll('.swiper-slide').forEach(
                    e => e.classList.remove('on')
                );
                document.querySelector('.swiper-slide-active').classclassList.add('on');
                document.querySelector('h1 strong').innerText = `${this.realIndex + 1} / ${this.slides.length - 2}`;
            }
        },



    });
    //const ddd = $('.ddd').slick();
})


