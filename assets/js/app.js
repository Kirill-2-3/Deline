$(function() {

    const intro = $("#intro");
    const header = $("#header");
    const nav = $("#nav-mini");



    /* Fix header */

    $(window).on("scroll load resize", function() {
        let elementHeight = $(intro).innerHeight();
        let scrollTop = $(this).scrollTop();

        if (scrollTop > elementHeight) {
            $(header).addClass("fixed");
            header.attr("data-show", "fixed");
        } else {
            $(header).removeClass("fixed");
            header.attr("data-show", "unfixed");
        }

    });



    /* Nav */

    $("#burger").on("click", function() {
        $(nav).toggleClass("show");
        $(header).toggleClass("show");
    });

    $(window).on("resize", function() {
        let windowWidth = $(this).width();

        if (windowWidth > 767) {
            $(nav).removeClass("show");
            $(header).removeClass("show");
        }
    });



    /* Slick scroll */

    $("[data-scroll]").on("click", function(e) {
        e.preventDefault();

        let elementScroll = $(this).data("scroll");
        let elementHeight = $(elementScroll).offset().top;

        $("html, body").animate({
            scrollTop: elementHeight - 50
        }, 700);

        $(nav).removeClass("show");
        $(header).removeClass("show");
    });



});