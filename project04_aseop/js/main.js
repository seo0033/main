$(function () {
    //main_visual
    $('.main_visual .main_slider').slick({
        // autoplay: true,
        arrows: false,
    });

    $('.main_dots li>a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.main_slider').slick('slickGoTo', idx)
    });

    //best_seller
    $('.bs_slider .container').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('.best_seller .bs_arrows i:nth-child(1)').on('click', function (e) {
        e.preventDefault();
        $('.bs_slider .container').slick('slickPrev');
    });
    $('.best_seller .bs_arrows i:nth-child(2)').on('click', function (e) {
        e.preventDefault();
        $('.bs_slider .container').slick('slickNext');
    });

    //seasonal_gift
    $('.seasonal_gift .sg_top .sg_txt .pd>div>a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on');
        $('.seasonal_gift .sg_top .sg_txt .pd>ul').toggleClass('on');
    })
    $('.seasonal_gift .sg_bottom .sg_txt .pd>div>a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on');
        $('.seasonal_gift .sg_bottom .sg_txt .pd>ul').toggleClass('on');
    })


})//the end