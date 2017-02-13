window.sr = ScrollReveal();
sr.reveal(".content2",  {
        duration: 1000,
        delay: 300
    });
sr.reveal(".readMore");
sr.reveal(".title", {
        duration: 800,
        delay: 200
    });
sr.reveal(".product");
sr.reveal(".item-image");
sr.reveal(".lastTitle");
sr.reveal(".lastSub");
sr.reveal("#social", {
        duration: 1000,
        delay: 200
    });

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
});

$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
});