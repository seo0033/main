$(function () {


    var closeBanner = () => {
        $('.TopBanner').slideToggle('on')
        // document.querySelector('.TopBanner').classList.toggle('on')
    }

    $('.TopBanner i').on('click', closeBanner);

    $('.MainSlider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // speed: 1000,
        // cssEase: 'linear',
        // variableWidth: true,
    });

    $('.ProductSlider').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });

    //e.currentTarget

    function toggleClass() {
        $(this).toggleClass('on')
        $('.Footer .popup').toggleClass('on')
    }
    $('.Footer .pop li').on('click', toggleClass);
    $('.popup i').on('click', toggleClass);


})//the end
