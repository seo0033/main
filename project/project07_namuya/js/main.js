$(function () {
    $('.main_visual .main_slider').slick({
        arrows: false,
        dots: true,
        // autoplay: true, 
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_visual .main_slider').on('init afterChange', function (e, s, c) {
        $('.main_slider figure.slick-current ').addClass('on').siblings().removeClass('on');
    });//main_visual

    // $('.menu .menu_slider').slick()

    $('.tab_menu>li>a').on('click', function (e) {
        e.preventDefault();
        // console.log($(this).parent().index());
        var idx = $(this).parent().index();
        $('.tab_content>li').removeClass('on');
        $('.tab_content>li').eq(idx).addClass('on');
        $('.tab_menu>li').removeClass('on');
        $(this).parent().addClass('on')

    })

    //@media(max-width:768px)
    $('.mbtn').on('click', function () {
        $('.mbtn').toggleClass('on');
        $('.gnb').toggleClass('on');
        $('.gnb>ul>li>a').next().stop().slideUp();
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.gnb>ul>li>ul').stop().slideUp();
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
        $('.gnb.on').removeClass('on');
        $('.gnb>ul').removeAttr('style')
    });

})//the end
