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
        $('.header-2').addClass('sticky-header');
        $('.content').addClass('sticky-content');
    }
    else {
        $('.header-2').removeClass('sticky-header');
        $('.content').removeClass('sticky-content');
    }
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});