$(function () {
    //special_center
    $('.special_center .tap_menu>li>a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.special_center .tap_content>li').removeClass('on');
        $('.special_center .tap_content>li').eq(idx).addClass('on');
        $('.special_center .tap_menu>li').removeClass('on');
        $(this).parent().addClass('on')
    });

    $('.special_center .right .tap_slider').slick({
        arrows: false,
    });

    $('.special_center .right .tap_content .left_ar').on('click', function () {
        $('.special_center .right .tap_slider').slick('slickPrev')
    });

    $('.special_center .right .tap_content .right_ar').on('click', function () {
        $('.special_center .right .tap_slider').slick('slickNext')
    });

    //site_map
    var siteMap = $('.gnb>ul')
        .clone()
        .addClass('container')
        .appendTo($('body'))
        .wrap('<div class="sitemap"></div>');
    $('<a><i class="xi-close"></i></a>').appendTo(siteMap.parent()); // appendTo(el) el의 마지막 자식으로 추가


    $('.site_map').on('click', function (e) {
        e.preventDefault();
        $('.sitemap').show()
    });

    $('.sitemap .xi-close').on('click', function (e) {
        e.preventDefault();
        $('.sitemap').slideUp()
    })

});//the end