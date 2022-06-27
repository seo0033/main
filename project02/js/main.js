$(function () {
    $('.main_slider').slick({
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_arrow i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    })
    $('.main_arrow i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    })
    //❓ 슬릭작동X

})//the end