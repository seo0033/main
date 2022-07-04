$(function () {
    $('.main_slider').slick({
        arrows: false,
        dots: true,
        // autoplay:true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.slider_best_menu_top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider_best_menu_bottom'
      });
      $('.slider_best_menu_bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider_best_menu_top',
        centerMode: true,
        focusOnSelect: true
      });
})