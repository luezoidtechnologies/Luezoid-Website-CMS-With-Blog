/*Global JS*/

$('.team-image').hover(function () {
    let id = $(this).attr('data-id');
    $('.team-image').children('img').addClass('gray-scale');
    $(this).children('img').removeClass('gray-scale');
    $('.team-member').hide();
    $("#" + id).show();
});

$('.flickity').flickity({
    cellAlign: 'left',
    contain: true,
    imagesLoaded: true,
    lazyLoad: true,
});

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
    )
});


$(document).ready(function () {
    $('.list-items').click(function (e) {
        $('.list-items').removeClass('current');
        $(this).addClass('current');
        $(this).attr('outline', 'none');
    });

    checkViewport();
    $(window).scroll(function () {
        checkViewport();
    });
});


function checkViewport() {
    if ($('#home').visible(true)) {
        $('.list-items').removeClass('current');
        $('.home-dot').addClass('current');
    } else if ($('#about_us').visible(true)) {
        $('.list-items').removeClass('current');
        $('.about-us-dot').addClass('current');
        $('.about-us-img').addClass('bounceIn');
    } else if ($('#services').visible(true)) {
        $('.list-items').removeClass('current');
        $('.services-dot').addClass('current');
        $('.about-us-img').addClass('bounceIn');
    } else if ($('#portfolio').visible(true)) {
        $('.list-items').removeClass('current');
        $('.our-work-dot').addClass('current');
        $('.projects').addClass('bounceIn');
    } else if ($('#our-approach').visible(true)) {
        $('.list-items').removeClass('current');
        $('.our-way-dot').addClass('current');
        $('.projects').addClass('bounceIn')
    } else if ($('#teams').visible(true)) {
        $('.list-items').removeClass('current');
        $('.our-team-dot').addClass('current');
        $('.team-img').addClass('bounceIn')
    } else if ($('#contact_us').visible(true)) {
        $('.list-items').removeClass('current');
        $('.contact-us-dot').addClass('current');
    }
}

