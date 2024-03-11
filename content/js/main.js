$(document).ready(function () {
    $(".button a").click(function () {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function () {
    $(".overlay").fadeToggle(200);
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});

$('.slider-galeria').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    asNavFor: '.slider-galeria-thumbs',
    autoplay: true,
    autoplaySpeed: 3000,
});
$('.slider-galeria-thumbs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-galeria',
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.search-toggle').addClass('closed');

$('.search-toggle .search-icon').click(function (e) {
    if ($('.search-toggle').hasClass('closed')) {
        $('.search-toggle').removeClass('closed').addClass('opened');
        $('.search-toggle, .search-container').addClass('opened');
        $('#search-terms').focus();
    } else {
        $('.search-toggle').removeClass('opened').addClass('closed');
        $('.search-toggle, .search-container').removeClass('opened');
    }
});