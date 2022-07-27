$(function () {
    $('.TopBanner i').on('click', function () {
        $('.TopBanner').slideUp();
    });

    // $('.pop button').on('click', function () {
    //     $(this).parent().hide();
    // });
    //팝업창 하나씩 닫기


    $('.pop button').on('click', function () {
        $('.pop').slideUp();
    });
    //팝업창 한번에 닫기


})//the end
