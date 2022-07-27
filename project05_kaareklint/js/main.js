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

    //@media(max-width:768px)
    $('.gnb .mbtn').on('click', function () {
        $('.gnb_bottom').toggleClass('on');
        $('.gnb_bottom>ul>li>a').next().stop().slideUp();
    });

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
    });

    //nav
    $('.gnb .gnb_bottom>ul>li>a').on('click', function (e) {
        if ($('.gnb .gnb_bottom').hasClass('on')) {
            e.preventDefault();
            $('.gnb .gnb_bottom>ul>li>ul').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.gnb>ul>li>a').next().hide();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('ul').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.gnb .gnb_bottom.on').removeClass('on');
        $('.gnb .gnb_bottom>ul').removeAttr('style')
    })

})//the end
