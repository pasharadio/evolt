<!--collapsible cat circle-->

$(".collapsecircle").click(function() {
    $(this).parent().children(".cat-catalog").toggle();

});
$(".collapsecircle").click(function() {
    $(this).find("i").toggleClass('fa-times fa-plus');
});
<!--bottom main collapsible list cat-->
$(document).ready(function() {
    $(".bottom-main-cat-container").hide();

    $(".collapse").click(function() {
        $(".bottom-main-cat-container").toggle();
    });
    $(".collapse").click(function() {
        $(this).find("i").toggleClass('fa-caret-up fa-caret-down');
    });
});
$(".panelp").show();
$(".coollp").click(function() {
    $(this).children(".panelp").toggle();
});
$(".coollp").click(function() {
    $(this).find("i").toggleClass('fa-angle-up fa-angle-down');
});
<!--collapsible tabs mob-->
$(".collapse_tabs").click(function() {
    $(this).parent().children(".tabs-content-inner").toggle('slow');
});
$(".collapse_tabs").click(function() {
    $(this).find("i").toggleClass('fa-chevron-down fa-chevron-up');
});
//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

jQuery(document).ready(function() {
    jQuery('.home-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 1200,
        arrows: false,
    });
});

jQuery(document).ready(function() {
    jQuery('.home-partial-product-slider').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 1200,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        infite: true,
        draggable: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                //slidesToShow: 3,
                //slidesToScroll: 3,
                //infinite: true,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                centerPadding: '28%',
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 2,
                        centerMode: true,
                centerPadding: '22%',
            }
        }]

    });
});

jQuery(document).ready(function() {
    jQuery('.product-mainimage-slider').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1200,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        infite: true,
        prevArrow: '<i class="fa fa-chevron-left slick-prev" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-right slick-next" aria-hidden="true"></i>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                //slidesToShow: 3,
                //slidesToScroll: 3,
                //infinite: true,
            }
        }, {
            breakpoint: 768,
            settings: {
                //slidesToShow: 3,
                //slidesToScroll: 1
            }
        }, {
            breakpoint: 320,
            settings: {
                //slidesToShow: 2,
                //slidesToScroll: 1.
                dots: true,
                arrows: false
            }
        }]
    });
});
jQuery(document).ready(function() {
    jQuery('.product-page-related_product-slider').slick({
        dots: false,
        arrows: true,
        //autoplay: true,
        autoplaySpeed: 1200,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        infite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '',
        nextArrow: '<i class="fa fa-chevron-right slick-next" aria-hidden="true"></i>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '24%'
            }
        }]
    });
});
///sticky header menu collapse
$(document).ready(function() {
    $(".menu-gamburger-cat-wrapper").hide();
    $(".catalog-menu-mini").click(function() {
        $(".menu-gamburger-cat-wrapper").toggle();
        $('.catalog-menu-mini').toggleClass('bg1 bg2');
    });
});
if (document.documentElement.clientWidth < 768) {
///sort menu on tablet/mobile
$(document).ready(function() {
    $(".product-sort>ul").hide();
    $(".product-sort").click(function() {
        $(".product-sort>ul").toggle();
    });
    $(".product-sort").click(function() {
    $(this).find("i").toggleClass('fa-angle-up fa-angle-down');
});
});
///filter menu on tablet/mobile; backlink click
$(document).ready(function() {
    $(".product-category-filter").hide();
    $(".product-filter").click(function() {
        $(".product-category-filter").show();
    });
    $(".product-filter-backlink").click(function() {
        $(".product-category-filter").hide();
    });

});
}