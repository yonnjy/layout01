$(function () {
    $('.main_slide').slick({
        arrows: false,
        // fade: true,
        // vertical: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_visual .dots li').on('mouseenter', function () {
        //내가 클릭한 요소의 번호를 알려줘
        let idx = $(this).index();
        console.log(idx);
        // true하면 뚱땅땅 전환됨
        $('.main_slide').slick('slickGoTo', idx, true);
    });
    $('.main_visual .arrows .left').on('click', function () {
        // 이전으로 가기 누르면 뒤로간다
        $('.main_slide').slick('slickPrev');
    });
    $('.main_visual .arrows .right').on('click', function () {
        // 다음으로 가기 누르면 앞으로간다
        $('.main_slide').slick('slickNext');
    });
});