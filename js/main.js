<!--collapsible cat circle-->

$(".collapsecircle").click(function() {
    $(this).parent().children(".cat-catalog").toggle();

});
$(".collapsecircle").click(function() {
    $(this).find("i").toggleClass('fa-times fa-plus');
});
<!--bottom main collapsible list cat-->
$(".collapse").click(function() {
    $(".bottom-main-cat-container").toggle('slow');
});
$(".collapse").click(function() {
    $(this).find("i").toggleClass('fa-caret-up fa-caret-down');
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
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}











// $(window).scroll(function(e){
//   parallax();
// });
// function parallax(){
//   var scrolled = $(window).scrollTop();
//   $('.prlx').css('margin-bottom',+(scrolled*0.03)+'px');
// }

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
        autoplay: true,
        autoplaySpeed: 1200,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        //asNavFor: '.slider-for',
        //centerMode: true,
        centerPadding: '10%',
        //focusOnSelect: true,
        infite: true,
        draggable: true,

    });
});
jQuery(document).ready(function() {
    jQuery('.home-partial-product-slider>.treeslider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1200,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        //asNavFor: '.slider-for',
        //centerMode: true,
        //centerPadding: '20%',
        //focusOnSelect: true,
        infite: true,
        draggable: true,

    });
});
jQuery(document).ready(function() {
    jQuery('.home-partial-product-slider>.mob-treeslider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1200,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        //asNavFor: '.slider-for',
        centerMode: true,
        //centerPadding: '20%',
        //focusOnSelect: true,
        infite: true,
        //draggable:true,

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
                dots:true,
                arrows:false
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
