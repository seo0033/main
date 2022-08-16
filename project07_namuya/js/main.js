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

})//the end