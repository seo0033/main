$(function () {
    //top_banner
    $('.top_banner a>i').on('click', function (e) {
        e.preventDefault();
        $('.top_banner').slideUp();
    });

    //show_room
    $('.show_room .sr_slide').slick();

    //review
    $('.review_slide_top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.review_slide_bottom'
    });
    $('.review_slide_bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.review_slide_top',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
})//the end