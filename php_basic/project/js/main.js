$(function () {
    $('.MainSlider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $('.ProductSlider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.ProductArrows i:nth-child(1)').on('click', function () {
        $('.ProductSlider').slick('slickPrev')
    })
    $('.ProductArrows i:nth-child(2)').on('click', function () {
        $('.ProductSlider').slick('slickNext')
    })
})//the end