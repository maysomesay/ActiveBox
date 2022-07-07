
$(function() {

    // Fixed Header
    let header = $("#header")
    let intro = $("#intro")
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        scrollPos = $(this).scrollTop();
        introH = intro.innerHeight();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    }


    // Smooth Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;


        nav.removeClass("show");


        $("html, body").animate ({
            

   
                scrollTop: elementOffset + 10
   

            
            
            
            

            // спитати у Сані, яке зробити для першого випадку +1 до значення, а для інших -75
        });
        

    });




    // Nav Toggle


    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    })


    // Rewievs https://kenwheeler.github.io/slick/

    let slider = $("#rewievsSlider");
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });

});




