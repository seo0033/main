$(function () {
    $('.main_visual .main_slider').slick({
        arrows: false,
        dots: true,
        // autoplay: true, 
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 3000,
    });

    $('.main_visual .main_slider').on('init afterChange', function (e, s, c) {
        $('.main_slider figure.slick-current ').addClass('on').siblings().removeClass('on');
    });
})//the end