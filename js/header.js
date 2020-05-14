$(document).ready(function() {
    if ($(window).width() > 576) {
        $('#toggle').show();
        $('#hamburger-nav-wrapper').hide();
    }
    else {
        $('#toggle').hide();
        $('#hamburger-nav-wrapper').show();
    }

    $('#hamburger-nav-wrapper').click(function() {
        $('#toggle').slideToggle(400);
        $(".menu-icon").toggleClass("close-menu");
    });
});

$(window).resize(function() {
    $(".menu-icon").removeClass("close-menu");
    if ($(window).width() > 576) {
        $('#toggle').show();
        $('#hamburger-nav-wrapper').hide();
    }
    else {
        $('#toggle').hide();
        $('#hamburger-nav-wrapper').show();
    }
});

$(window).scroll(function() {
    if($(window).scrollTop()) {
        $('.site-header').addClass('sticky-header');
        $('.content').addClass('sticky-content');
    }
    else {
        $('.site-header').removeClass('sticky-header');
        $('.content').removeClass('sticky-content');
    }
});