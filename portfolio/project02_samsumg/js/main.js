$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $("header").css("background", "rgba(0, 0, 0, 0.6)");
        }
        else {
            $("header").css("background", "none");
        }
    })//header

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_arrow i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    })
    $('.main_arrow i:nth-child(3)').on('click', function () {
        $('.main_slider').slick('slickNext')
    });

    $('.main_arrow li>a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.main_slider').slick('slickGoTo', idx)
    });//main_visual

    $('.tab_menu li').on('click', function (event) {
        event.preventDefault();
        $('.tab_menu li').removeClass('on');
        $(this).addClass('on');
        var idx = $(this).index();
        // console.log(idx)
        $('.tab_content>div').removeClass('on');
        $('.tab_content>div').eq(idx).addClass('on');
    });

    $('#fs').on('change', function () {
        console.log($(this), $(this).val())
        var lnk = $(this).val();
        if (lnk) {
            window.open(lnk);
        }
    });//footer

})//the end