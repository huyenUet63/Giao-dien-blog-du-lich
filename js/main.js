$(document).ready(function() {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /*--click event--*/
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })

    /*--owl-carousel for blog--*/
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true, 
        navText: [$('.owl-nav .owl-nav-prev'), $('.owl-nav .owl-nav-next')]
    });
})