$(function () {
    //top_banner
    $('.top_banner a>i').on('click', function (e) {
        e.preventDefault();
        $('.top_banner').slideUp();
    });

    //show_room
    $('.show_room .left_slide').slick({
        arrows: false,
    });

    $('.show_room .left .sr_arrows i:nth-child(1)').on('click', function (e) {
        e.preventDefault();
        $('.show_room .left_slide').slick('slickPrev');
    });
    $('.show_room .left .sr_arrows i:nth-child(2)').on('click', function (e) {
        e.preventDefault();
        $('.show_room .left_slide').slick('slickNext');
    });

    $('.show_room .right_slide').slick({
        arrows: false,
    });

    $('.show_room .left_slide').on('afterChange', function () {
        $('.show_room .right_slide').slick('slickNext')
    })


    //review
    $('.review_slide_top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.review_slide_bt'
    });
    $('.review_slide_bt').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        // arrows: false,
        asNavFor: '.review_slide_top',
        // centerMode: true,
        focusOnSelect: true
    });

    $(function () {
        $('.gnb .mbtn').on('click', function () {
            $('.gnb').toggleClass('on');
        });
})//the end