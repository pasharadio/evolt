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
        speed:400,
        slidesToShow: 3,
        slidesToScroll: 1,
        //asNavFor: '.slider-for',
        //centerMode: true,
        centerPadding: '10%',
        //focusOnSelect: true,
        infite:true,
        draggable:true,
       
    });
});
jQuery(document).ready(function() {
    jQuery('.home-partial-product-slider>.treeslider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1200,
        speed:400,
        slidesToShow: 1,
        slidesToScroll: 1,
        //asNavFor: '.slider-for',
        //centerMode: true,
        //centerPadding: '20%',
        //focusOnSelect: true,
        infite:true,
        draggable:true,
       
    });
});
jQuery(document).ready(function() {
    jQuery('.home-partial-product-slider>.mob-treeslider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1200,
        speed:400,
        slidesToShow: 3,
        slidesToScroll: 3,
        //asNavFor: '.slider-for',
        centerMode: true,
        //centerPadding: '20%',
        //focusOnSelect: true,
        infite:true,
        //draggable:true,
       
    });
});

