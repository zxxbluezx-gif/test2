$(function () {
    // 메뉴
    $('.main-menu').on('mouseover', function () {
        $('.sub-menu').stop().slideDown();
    })

    $('.main-menu').on('mouseleave', function () {
        $('.sub-menu').stop().slideUp();
    })


    // 이미지 슬라이드
    // let i = 0;

    // setInterval(function () {
    //     if (i < 2) i++;
    //     else i = 0;

    //     $('.image-slide>ul').animate({ marginTop: -300 * i }, 1000);
    // }, 2000);

    setInterval(function(){
        $('.image-slide>ul').animate({marginTop : -300}, 1000, function(){
            $('.image-slide>ul').append($('.image-slide>ul>li').first());
            $('.image-slide>ul').css('marginTop', 0);
        })
    }, 2000);


    // 탭
    $('.notice-gallery>ul>li').on('click', function(){
        let i = $(this).index();

        $('.notice-gallery>ul>li').removeClass('tab-active');
        $(this).addClass('tab-active');

        $('.tab-content').removeClass('tab-content-active');
        $(`.notice-gallery>ul>li:nth-of-type(${i+1}) .tab-content`).addClass('tab-content-active');
    })


    // 팝업창
    $('.pop').on('click', function(){
        $('dialog')[0].showModal();
    })

    $('.button-wrap>button').on('click', function(){
        $('dialog')[0].close();
    })
})