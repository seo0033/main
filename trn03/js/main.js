$(function () {
    $('.TopBanner i').on('click', function () {
        $('.TopBanner').slideUp();
    });

    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // speed: 1000,
        // cssEase: 'linear',
        // variableWidth: true,
    });


})//the end
